// Import necessary dependencies and assets
import type { Metadata } from "next";
import Favicon from "/public/favicon.ico";
import "./globals.css"; // Global styles for the entire application
import { fira } from "@/utils/fonts"; // Font utility, presumably for applying a specific font style

// Metadata configuration for the application
export const metadata: Metadata = {
	title: "Snappy",
	description: "Create and share beautiful images of your source code.",
	icons: [{ rel: "icon", url: Favicon.src }],
	generator: "Next.js",
	applicationName: "Snappy",
	referrer: "origin-when-cross-origin",
	keywords: ["code snapshot tool", "Next.js", "React", "JavaScript"],
	authors: [{ name: "shourav", url: "https://nextjs.org" }],
	creator: "Shourav Rahman",
	publisher: "Shourav Rahman",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		title: "Snappy - Code Snippet Sharing Platform",
		description: "Capture and Share Code Snippets Instantly with Snappy.",
		url: "https://your-snappy-app.com",
		siteName: "Snappy - Code Snippet Sharing Platform",
		type: "website",
		images: [
			{
				url: "https://your-snappy-app.com/static/brand/banner.png",
				width: 1200, // Replace with the actual width
				height: 630, // Replace with the actual height
				alt: "Snappy Banner",
			},
		],
	},
	viewport: {
		width: "device-width",
		initialScale: 1.0,
		maximumScale: 1.0,
		userScalable: false,
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
	children, // Child components to be rendered within the layout
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={fira.className}>
				<main className='max-w-7xl mx-auto'>{children}</main>
				{/* Main content area */}
			</body>
		</html>
	);
}
