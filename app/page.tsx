"use client";
// import Editor from "@/components/Editor";
import Footer from "@/components/Footer";
import { backgrounds, languages, themes } from "@/utils/utilities";
import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import Header from "@/components/Header";
import dynamic from "next/dynamic";
import Image from "next/image";

const Editor = dynamic(() => import("@/components/Editor"), {
	ssr: false,
	loading: () => <div>Loading Editor...</div>,
});

function Home() {
	const editorRef = useRef(null);

	const [language, setLanguage] = useState(languages[0].name);
	const [theme, setTheme] = useState(themes[1]);
	const [bg, setBg] = useState(backgrounds[3]);
	const [padding, setPadding] = useState(["1rem", "2rem", "3rem"]);
	const [currentPadding, setCureentPadding] = useState(padding[2]);
	const [activeIcon, setActiveIcon] = useState(languages[0].icon);

	const exportPng = async () => {
		const editorElement = editorRef.current;

		if (editorElement) {
			const canvas = await html2canvas(editorElement);
			const image = canvas
				.toDataURL("image/png")
				.replace("image/png", "image/octet-stream");

			const link = document.createElement("a");
			link.download = "code.png";
			link.href = image;
			link.click();
		}
	};

	return (
		<div className='flex flex-col items-center justify-between px-4 mt-10'>
			{/* <h1 className='text-6xl text-yellow-400 mt-12 p-2'>Snappy!</h1> */}
			<Image
				src='/logo-trs.png'
				alt='logo'
				width={100}
				height={0}
				className='w-40 h-28 object-cover'
			/>
			<h2 className={`text-xl max-w-4xl text-center text-white mb-6`}>
				Create and share beautiful images of your source code. Start typing or
				paste into the text area to get started.
			</h2>
			<Header
				language={language}
				setLanguage={setLanguage}
				setActiveIcon={setActiveIcon}
				theme={theme}
				setTheme={setTheme}
				bg={bg}
				setBg={setBg}
				padding={padding}
				currentPadding={currentPadding}
				setCurrentPadding={setCureentPadding}
				exportPng={exportPng}
			/>

			<div className='mt-10 flex justify-center text-white' ref={editorRef}>
				<Editor
					background={bg}
					language={language}
					icon={activeIcon}
					theme={theme}
					currentPadding={currentPadding}
				/>
			</div>
			<Footer />
		</div>
	);
}

export default Home;
