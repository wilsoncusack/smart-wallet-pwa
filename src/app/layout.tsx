import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "../../styles/globals.css";

import React from "react";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

const APP_NAME = "SW-PWA";
const APP_DEFAULT_TITLE = "Smart Wallet PWA";
const APP_TITLE_TEMPLATE = "%s - Smart Wallet PWA";
const APP_DESCRIPTION = "An example PWA using Smart Wallet";

export const metadata: Metadata = {
	metadataBase: new URL("https://smart-wallet-pwa.vercel.app/"),
	applicationName: APP_NAME,
	title: {
		default: APP_DEFAULT_TITLE,
		template: APP_TITLE_TEMPLATE,
	},
	description: APP_DESCRIPTION,
	manifest: "/manifest.json",
	themeColor: "#FFFFFF",
	appleWebApp: {
		capable: true,
		statusBarStyle: "default",
		title: APP_DEFAULT_TITLE,
	},
	formatDetection: {
		telephone: false,
	},
	openGraph: {
		title: APP_DEFAULT_TITLE,
		description: APP_DESCRIPTION,
		url: "https://nextjs.org",
		siteName: "Next.js",
		images: [
			{
				url: "https://nextjs.org/og.png",
				width: 800,
				height: 600,
			},
			{
				url: "https://nextjs.org/og-alt.png",
				width: 1800,
				height: 1600,
				alt: "My custom alt",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary",
		title: {
			default: APP_DEFAULT_TITLE,
			template: APP_TITLE_TEMPLATE,
		},
		description: APP_DESCRIPTION,
	},
};

export default function RootLayout(props: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers>{props.children}</Providers>
			</body>
		</html>
	);
}
