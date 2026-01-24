/** @format */

/**
 * Utility functions for handling XTZ (Etherlink native token)
 * IMPORTANT: XTZ uses 6 decimals, not 18!
 */

import { formatUnits, parseUnits } from "viem";

// XTZ decimals constant
export const XTZ_DECIMALS = 6;

/**
 * Format XTZ amount from wei to human-readable string
 * @param amount - Amount in smallest unit (wei equivalent)
 * @param decimals - Number of decimal places to show (default: 4)
 * @returns Formatted string (e.g., "1.2345 XTZ")
 */
export function formatXTZ(amount: bigint, decimals: number = 4): string {
	const formatted = formatUnits(amount, XTZ_DECIMALS);
	const num = parseFloat(formatted);
	return `${num.toFixed(decimals)} XTZ`;
}

/**
 * Parse XTZ amount from human-readable string to wei
 * @param amount - Amount as string (e.g., "1.5")
 * @returns Amount in smallest unit (bigint)
 */
export function parseXTZ(amount: string): bigint {
	return parseUnits(amount, XTZ_DECIMALS);
}

/**
 * Format XTZ for display (without "XTZ" suffix)
 * @param amount - Amount in smallest unit
 * @param decimals - Number of decimal places
 * @returns Formatted number string
 */
export function formatXTZNumber(amount: bigint, decimals: number = 4): string {
	const formatted = formatUnits(amount, XTZ_DECIMALS);
	const num = parseFloat(formatted);
	return num.toFixed(decimals);
}

/**
 * Format XTZ with thousands separators
 * @param amount - Amount in smallest unit
 * @param decimals - Number of decimal places
 * @returns Formatted string with commas (e.g., "1,234.5678 XTZ")
 */
export function formatXTZWithCommas(
	amount: bigint,
	decimals: number = 4
): string {
	const formatted = formatUnits(amount, XTZ_DECIMALS);
	const num = parseFloat(formatted);
	return `${num.toLocaleString("en-US", {
		minimumFractionDigits: decimals,
		maximumFractionDigits: decimals,
	})} XTZ`;
}

/**
 * Convert XTZ to USD (requires price feed)
 * @param amount - Amount in smallest unit
 * @param xtzPrice - Current XTZ price in USD
 * @returns USD value as string
 */
export function xtzToUSD(amount: bigint, xtzPrice: number): string {
	const xtzAmount = parseFloat(formatUnits(amount, XTZ_DECIMALS));
	const usdValue = xtzAmount * xtzPrice;
	return `$${usdValue.toLocaleString("en-US", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	})}`;
}

/**
 * Validate XTZ amount input
 * @param input - User input string
 * @returns true if valid, false otherwise
 */
export function isValidXTZAmount(input: string): boolean {
	if (!input || input.trim() === "") return false;

	// Check if it's a valid number
	const num = parseFloat(input);
	if (isNaN(num) || num < 0) return false;

	// Check decimal places (max 6 for XTZ)
	const parts = input.split(".");
	if (parts.length > 2) return false;
	if (parts.length === 2 && parts[1].length > XTZ_DECIMALS) return false;

	return true;
}

/**
 * Get XTZ amount with max decimals enforced
 * @param input - User input string
 * @returns Cleaned input string
 */
export function cleanXTZInput(input: string): string {
	// Remove non-numeric characters except decimal point
	let cleaned = input.replace(/[^\d.]/g, "");

	// Ensure only one decimal point
	const parts = cleaned.split(".");
	if (parts.length > 2) {
		cleaned = parts[0] + "." + parts.slice(1).join("");
	}

	// Limit decimal places to 6
	if (parts.length === 2 && parts[1].length > XTZ_DECIMALS) {
		cleaned = parts[0] + "." + parts[1].substring(0, XTZ_DECIMALS);
	}

	return cleaned;
}

/**
 * Compare two XTZ amounts
 * @param a - First amount
 * @param b - Second amount
 * @returns -1 if a < b, 0 if a === b, 1 if a > b
 */
export function compareXTZ(a: bigint, b: bigint): number {
	if (a < b) return -1;
	if (a > b) return 1;
	return 0;
}

/**
 * Calculate percentage of XTZ amount
 * @param amount - Total amount
 * @param percentage - Percentage (0-100)
 * @returns Calculated amount
 */
export function percentageOfXTZ(amount: bigint, percentage: number): bigint {
	return (amount * BigInt(Math.floor(percentage * 100))) / BigInt(10000);
}

// Example usage:
// const balance = 1500000n; // 1.5 XTZ in smallest unit
// formatXTZ(balance) // "1.5000 XTZ"
// formatXTZWithCommas(balance) // "1.5000 XTZ"
// parseXTZ("1.5") // 1500000n
