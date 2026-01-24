import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

/** @type import('hardhat/config').HardhatUserConfig */
export default {
	solidity: {
		version: "0.8.24",
		settings: {
			optimizer: {
				enabled: true,
				runs: 200, // Increased from 1 for better gas optimization on Etherlink
			},
			viaIR: true,
		},
	},
	networks: {
		// Keep Mantle for reference
		mantleSepolia: {
			url: "https://rpc.sepolia.mantle.xyz",
			chainId: 5003,
			accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
		},
		// Add Etherlink Testnet
		etherlinkTestnet: {
			url:
				process.env.ETHERLINK_TESTNET_RPC ||
				"https://node.ghostnet.etherlink.com",
			chainId: 128123,
			accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
			gasPrice: 1000000000, // 1 gwei (very low on Etherlink)
		},
		// Add Etherlink Mainnet
		etherlinkMainnet: {
			url:
				process.env.ETHERLINK_MAINNET_RPC ||
				"https://node.mainnet.etherlink.com",
			chainId: 42793,
			accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
			gasPrice: 1000000000, // 1 gwei
		},
		hardhat: {
			chainId: 31337,
		},
	},
	paths: {
		artifacts: "./src/contracts/artifacts",
		cache: "./cache",
		sources: "./contracts",
		tests: "./test",
	},
	etherscan: {
		apiKey: {
			etherlinkTestnet: "no-api-key-needed",
			etherlinkMainnet: "no-api-key-needed",
		},
		customChains: [
			{
				network: "etherlinkTestnet",
				chainId: 128123,
				urls: {
					apiURL: "https://testnet.explorer.etherlink.com/api",
					browserURL: "https://testnet.explorer.etherlink.com",
				},
			},
			{
				network: "etherlinkMainnet",
				chainId: 42793,
				urls: {
					apiURL: "https://explorer.etherlink.com/api",
					browserURL: "https://explorer.etherlink.com",
				},
			},
		],
	},
};
