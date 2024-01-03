// Import necessary dependencies and assets
import type { Metadata, Viewport } from "next";
import Favicon from "/public/favicon.ico";
import "./globals.css"; // Global styles for the entire application
import { fira } from "@/utils/fonts"; // Font utility, presumably for applying a specific font style
import GoogleAnalytics from "@/components/GoogleAnalytics";

//viewport
export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1.0,
	maximumScale: 1.0,
	userScalable: false,
};
// Metadata configuration for the application
export const metadata: Metadata = {
	metadataBase: new URL("https://snappy-beta.vercel.app"),
	alternates: {
		canonical: "/",
		languages: {
			"en-US": "/en-US",
		},
	},
	title: "Snappy",
	description:
		"Craft eye-catching code snapshots that capture attention and boost engagement.",
	icons: [{ rel: "icon", url: Favicon.src }],
	generator: "Next.js",
	applicationName: "Snappy",
	referrer: "origin-when-cross-origin",
	keywords: ["code snapshot tool", "Next.js", "React", "JavaScript"],
	authors: [{ name: "Shourav Rahman", url: "https://rahman-dev.vercel.app" }],
	creator: "Shourav Rahman",
	publisher: "Shourav Rahman",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		title: "Snappy - Code snapshot tool",
		description:
			"Craft eye-catching code snapshots that capture attention and boost engagement.",
		url: "https://snappy-beta.vercel.app",
		siteName: "Snappy -Craft eye-catching code snapshots",
		type: "website",
		images: [
			{
				url: "og.png",
				width: 1200, // Replace with the actual width
				height: 627, // Replace with the actual height
				alt: "Snappy Banner",
			},
		],
	},

	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: false,
			noimageindex: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

// RootLayout component for providing a basic HTML structure
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={fira.className}>
				{process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
					<GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
				) : null}
				<main className='max-w-7xl mx-auto'>{children}</main>
			</body>
		</html>
	);
}
