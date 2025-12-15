/** @format */

import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Web3Provider } from "@/providers/web3-provider";

import "@rainbow-me/rainbowkit/styles.css";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["400", "600", "700", "800"],
});

export const metadata = {
	title: "StrataDeed — Tokenized Property Deeds on Mantle",
	description:
		"Mint, list, and discover tokenized property deeds on Mantle Network",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="dark">
			<body className={montserrat.className + " antialiased"}>
					<Web3Provider>
						<div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
							<Navbar />
							<main className="flex-1 w-full">{children}</main>
							<Footer />
						</div>
					</Web3Provider>
			</body>
		</html>
	);
}
