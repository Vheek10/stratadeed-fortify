/** @format */

import { defineChain } from "viem";

export const etherlinkTestnet = defineChain({
	id: 128123,
	name: "Etherlink Testnet",
	nativeCurrency: {
		name: "Tez",
		symbol: "XTZ",
		decimals: 6, // ⚠️ Important: XTZ uses 6 decimals, not 18!
	},
	rpcUrls: {
		default: {
			http: ["https://node.ghostnet.etherlink.com"],
		},
		public: {
			http: ["https://node.ghostnet.etherlink.com"],
		},
	},
	blockExplorers: {
		default: {
			name: "Etherlink Testnet Explorer",
			url: "https://testnet.explorer.etherlink.com",
		},
	},
	testnet: true,
	contracts: {
		multicall3: {
			address: "0xcA11bde05977b3631167028862bE2a173976CA11",
			blockCreated: 0,
		},
	},
});

export const etherlink = defineChain({
	id: 42793,
	name: "Etherlink",
	nativeCurrency: {
		name: "Tez",
		symbol: "XTZ",
		decimals: 6, // ⚠️ Important: XTZ uses 6 decimals, not 18!
	},
	rpcUrls: {
		default: {
			http: ["https://node.mainnet.etherlink.com"],
		},
		public: {
			http: ["https://node.mainnet.etherlink.com"],
		},
	},
	blockExplorers: {
		default: {
			name: "Etherlink Explorer",
			url: "https://explorer.etherlink.com",
		},
	},
	contracts: {
		multicall3: {
			address: "0xcA11bde05977b3631167028862bE2a173976CA11",
			blockCreated: 0,
		},
	},
});
