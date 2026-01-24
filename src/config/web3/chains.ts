/** @format */

import { mantle, mantleSepoliaTestnet } from "viem/chains";
import { etherlink, etherlinkTestnet } from "@/config/chains/etherlink";

// Export both Mantle and Etherlink for flexibility
export { mantle, mantleSepoliaTestnet, etherlink, etherlinkTestnet };

export const mantleChains = {
	mantle,
	mantleSepoliaTestnet,
};

export const etherlinkChains = {
	etherlink,
	etherlinkTestnet,
};

// Default to Etherlink for production
export const defaultChains = [etherlinkTestnet, etherlink];
