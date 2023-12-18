import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Snappy",
	description: "Create beautiful code snapshots.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={dmSans.className}>
				<main className='max-w-7xl mx-auto'>{children}</main>
			</body>
		</html>
	);
}
