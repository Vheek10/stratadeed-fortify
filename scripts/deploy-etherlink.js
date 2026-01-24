import hre from "hardhat";
import { ethers } from "hardhat";

async function main() {
	console.log("🚀 Deploying StrataDeed to Etherlink...\n");

	const [deployer] = await ethers.getSigners();
	const network = await ethers.provider.getNetwork();

	console.log("Network:", network.name);
	console.log("Chain ID:", network.chainId.toString());
	console.log("Deployer:", deployer.address);

	// Get balance (remember: XTZ has 6 decimals!)
	const balance = await ethers.provider.getBalance(deployer.address);
	console.log("Balance:", ethers.formatUnits(balance, 6), "XTZ\n");

	// Deploy StrataDeedRWA (UUPS Proxy)
	console.log("📝 Deploying StrataDeedRWA...");

	const StrataDeedRWA = await ethers.getContractFactory("StrataDeedRWA");

	// Deploy implementation
	const implementation = await StrataDeedRWA.deploy();
	await implementation.waitForDeployment();
	const implAddress = await implementation.getAddress();
	console.log("✅ Implementation deployed to:", implAddress);

	// Prepare initialization data
	const fundingCap = ethers.parseEther("1000"); // 1000 ETH equivalent
	const owner = deployer.address;
	const admins = [
		deployer.address,
		// Add 2 more admin addresses for multisig (3 required)
		// Replace these with real addresses before mainnet deployment
		"0x0000000000000000000000000000000000000001",
		"0x0000000000000000000000000000000000000002",
	];

	console.log("\n⚙️  Initialization parameters:");
	console.log("Funding Cap:", ethers.formatEther(fundingCap), "ETH");
	console.log("Owner:", owner);
	console.log("Admins:", admins.length);

	// Deploy proxy
	console.log("\n📝 Deploying ERC1967 Proxy...");
	const ERC1967Proxy = await ethers.getContractFactory(
		"@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol:ERC1967Proxy"
	);
	const initData = StrataDeedRWA.interface.encodeFunctionData("initialize", [
		fundingCap,
		owner,
		admins,
	]);

	const proxy = await ERC1967Proxy.deploy(implAddress, initData);
	await proxy.waitForDeployment();
	const proxyAddress = await proxy.getAddress();

	console.log("✅ Proxy deployed to:", proxyAddress);
	console.log("\n📋 Contract Addresses:");
	console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
	console.log("Implementation:", implAddress);
	console.log("Proxy (Main):", proxyAddress);
	console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

	// Verify on explorer (if supported)
	if (network.chainId === 42793n || network.chainId === 128123n) {
		console.log("⏳ Waiting for block confirmations...");
		await implementation.deploymentTransaction()?.wait(5);

		try {
			console.log("🔍 Verifying contract on Etherlink Explorer...");
			await hre.run("verify:verify", {
				address: implAddress,
				constructorArguments: [],
			});
			console.log("✅ Contract verified!");
		} catch (error) {
			console.log(
				"⚠️  Verification failed (may not be supported yet):",
				error.message
			);
		}
	}

	console.log("\n🎉 Deployment complete!");
	console.log("\n📝 Next steps:");
	console.log("1. Update .env.local with:");
	console.log(`   NEXT_PUBLIC_STRATADEED_RWA_ADDRESS=${proxyAddress}`);
	console.log("2. Update frontend contract addresses in src/config/contracts.ts");
	console.log("3. Test on Etherlink testnet");
	console.log("4. Deploy to mainnet when ready\n");

	// Save deployment info to file
	const fs = await import("fs");
	const deploymentInfo = {
		network: network.name,
		chainId: network.chainId.toString(),
		timestamp: new Date().toISOString(),
		deployer: deployer.address,
		contracts: {
			implementation: implAddress,
			proxy: proxyAddress,
		},
		initParams: {
			fundingCap: ethers.formatEther(fundingCap),
			owner,
			admins,
		},
	};

	const filename = `deployment-${network.chainId}-${Date.now()}.json`;
	fs.writeFileSync(filename, JSON.stringify(deploymentInfo, null, 2));
	console.log(`💾 Deployment info saved to ${filename}\n`);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
