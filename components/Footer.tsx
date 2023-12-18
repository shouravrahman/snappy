import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className='flex fixed bottom-0 text-white items-center gap-10 py-12'>
			<Link href='/' className='text-sm font-medium'>
				LinkedIn
			</Link>
			<Link href='/' className='text-sm font-medium'>
				Made by shouravrahman
			</Link>
			<Link href='/' className='text-sm font-medium'>
				Source code
			</Link>
		</footer>
	);
};

export default Footer;
