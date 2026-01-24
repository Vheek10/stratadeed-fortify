/** @format */

import StrataDeedArtifact from "../contracts/artifacts/contracts/StrataDeedRWA.sol/StrataDeedRWA.json";

/**
 * Centralized configuration for Smart Contracts.
 * Exports ABI, Bytecode, and deployed addresses for easy access across the app.
 */

export const STRATA_DEED_ABI = StrataDeedArtifact.abi;
export const STRATA_DEED_BYTECODE = StrataDeedArtifact.bytecode as `0x${string}`;

// Contract addresses by chain ID
export const CONTRACT_ADDRESSES = {
	// Etherlink Testnet
	128123: {
		StrataDeedRWA:
			(process.env.NEXT_PUBLIC_STRATADEED_RWA_ADDRESS as `0x${string}`) ||
			("" as `0x${string}`),
		StrataDeedNFT:
			(process.env.NEXT_PUBLIC_STRATADEED_NFT_ADDRESS as `0x${string}`) ||
			("" as `0x${string}`),
	},
	// Etherlink Mainnet
	42793: {
		StrataDeedRWA:
			(process.env.NEXT_PUBLIC_STRATADEED_RWA_ADDRESS as `0x${string}`) ||
			("" as `0x${string}`),
		StrataDeedNFT:
			(process.env.NEXT_PUBLIC_STRATADEED_NFT_ADDRESS as `0x${string}`) ||
			("" as `0x${string}`),
	},
	// Keep Mantle for reference
	5003: {
		StrataDeedRWA: "0x4C7e8Cd47EE5782c948Ee65F0D93F4D4e27EF93C" as `0x${string}`,
		StrataDeedNFT: "" as `0x${string}`,
	},
};

export function getContractAddress(
	chainId: number,
	contractName: "StrataDeedRWA" | "StrataDeedNFT"
): `0x${string}` {
	const addresses =
		CONTRACT_ADDRESSES[chainId as keyof typeof CONTRACT_ADDRESSES];
	if (!addresses) {
		throw new Error(`Unsupported chain ID: ${chainId}`);
	}
	return addresses[contractName];
}

// Legacy exports for backward compatibility
export const STRATA_DEED_ADDRESS =
	(process.env.NEXT_PUBLIC_STRATA_DEED_ADDRESS as `0x${string}`) ||
	"0x4C7e8Cd47EE5782c948Ee65F0D93F4D4e27EF93C";
export const STRATA_DEED_RWA_ADDRESS =
	"0x4C7e8Cd47EE5782c948Ee65F0D93F4D4e27EF93C" as `0x${string}`;

/**
 * Convenience object for Wagmi hooks
 */
export const STRATA_DEED_CONFIG = {
	address: STRATA_DEED_ADDRESS,
	abi: STRATA_DEED_ABI,
	bytecode: STRATA_DEED_BYTECODE,
} as const;

