/** @format */

import { http } from "wagmi";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { etherlink, etherlinkTestnet } from "@/config/chains/etherlink";

export const config = getDefaultConfig({
	appName: "StrataDeed on Etherlink",
	projectId:
		process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ||
		"47828de378396c21a4fb4a2da529712a", // Fallback ID for build time
	chains: [etherlinkTestnet, etherlink],
	transports: {
		[etherlinkTestnet.id]: http("https://node.ghostnet.etherlink.com"),
		[etherlink.id]: http("https://node.mainnet.etherlink.com"),
	},
	ssr: false,
});
