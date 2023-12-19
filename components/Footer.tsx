import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className='flex text-white items-center gap-10 py-12'>
			<Link
				href='https://www.linkedin.com/in/shouravrahman'
				target='_blank'
				className='text-lg '
			>
				Made by <strong className='text-yellow-400'>shouravrahman</strong>
			</Link>
			<Link
				href='https://github.com/shouravrahman/snappy'
				target='_blank'
				className='text-sm font-medium'
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
