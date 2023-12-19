import type { Metadata } from "next";
import Favicon from "/public/favicon.ico";
import "./globals.css";
import { dmSans, fira } from "@/utils/fonts";

export const metadata: Metadata = {
	title: "Snappy",
	description: "Create and share beautiful images of your source code.",
	icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={fira.className}>
				<main className='max-w-7xl mx-auto'>{children}</main>
			</body>
		</html>
	);
}
