import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className='flex text-[#fcfef5] items-center gap-6 py-12'>
			<Link
				href='https://www.linkedin.com/in/shouravrahman'
				target='_blank'
				className='text-lg '
				role='link'
			>
				Made with 🤎 by{" "}
				<strong className='text-[#FF8A00]'>shouravrahman</strong>
			</Link>
			<Link
				href='https://github.com/shouravrahman/snappy'
				target='_blank'
				className='text-sm font-medium ml-4 '
				role='link'
			>
				<Github className='hover:scale-95' />
			</Link>
			<Link
				href='https://www.linkedin.com/in/shouravrahman'
				target='_blank'
				className='text-sm font-medium '
				role='link'
			>
				<Linkedin className='hover:scale-95' />
			</Link>
		</footer>
	);
};

export default Footer;
