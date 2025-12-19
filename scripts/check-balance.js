const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  const provider = hre.ethers.provider;
  
  console.log("Checking balance for address:", deployer.address);
  console.log("Network:", hre.network.name);
  console.log("Chain ID:", (await provider.getNetwork()).chainId.toString());

  const balance = await provider.getBalance(deployer.address);
  console.log("Balance:", hre.ethers.formatEther(balance), "MNT");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
