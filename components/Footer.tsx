import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className='flex text-white items-center gap-6 py-12'>
			<Link
				href='https://www.linkedin.com/in/shouravrahman'
				target='_blank'
				className='text-lg '
			>
				Made with 🧠 by{" "}
				<strong className='text-yellow-400'>shouravrahman</strong>
			</Link>
			<Link
				href='https://github.com/shouravrahman/snappy'
				target='_blank'
				className='text-sm font-medium ml-4'
			>
				<Github />
			</Link>
			<Link
				href='https://www.linkedin.com/in/shouravrahman'
				target='_blank'
				className='text-sm font-medium'
			>
				<Linkedin />
			</Link>
		</footer>
	);
};

export default Footer;
