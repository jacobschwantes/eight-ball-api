import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
	variable: "--font-instrument-serif",
	subsets: ["latin"],
	weight: "400",
});

export const metadata: Metadata = {
	title: "8Ball API - Magic 8-Ball Fortune API",
	description:
		"A RESTful API for generating Magic 8-Ball responses for your applications",
	metadataBase: new URL("https://eightballapi.com"),
	openGraph: {
		title: "8Ball API - Magic 8-Ball Fortune API",
		description: "A RESTful API for generating Magic 8-Ball responses",
		url: "https://eightballapi.com",
		siteName: "8Ball API",
		locale: "en_US",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<Script id="sitelinks-searchbox" type="application/ld+json">
					{`
					{
						"@context": "https://schema.org",
						"@type": "WebSite",
						"url": "https://eightballapi.com/",
						"potentialAction": {
							"@type": "SearchAction",
							"target": "https://eightballapi.com/search?q={search_term_string}",
							"query-input": "required name=search_term_string"
						},
						"sameAs": [
							"https://github.com/jacobschwantes/eight-ball-api"
						]
					}
					`}
				</Script>
				<Script id="site-navigation" type="application/ld+json">
					{`
					{
						"@context": "https://schema.org",
						"@type": "ItemList",
						"itemListElement": [
							{
								"@type": "SiteNavigationElement",
								"position": 1,
								"name": "Home",
								"description": "Magic 8-Ball API Home",
								"url": "https://eightballapi.com/"
							},
							{
								"@type": "SiteNavigationElement",
								"position": 2,
								"name": "Documentation",
								"description": "API Documentation",
								"url": "https://eightballapi.com/docs"
							},
							{
								"@type": "SiteNavigationElement",
								"position": 3,
								"name": "Playground",
								"description": "API Playground",
								"url": "https://eightballapi.com/playground"
							}
						]
					}
					`}
				</Script>
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased dark`}
			>
				{children}
			</body>
		</html>
	);
}
