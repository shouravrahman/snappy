"use client";
import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import Image from "next/image";
import Header from "@/components/Header";
import { backgrounds, initialCode, languages, themes } from "@/utils/utilities";
import Footer from "@/components/Footer";

import Editor from "@/components/Editor";

function Home() {
	// Ref for capturing the Editor element during export
	const editorRef = useRef<HTMLDivElement>(null);

	// State for managing various aspects of the code editor
	const [language, setLanguage] = useState(languages[0].name);
	const [theme, setTheme] = useState(themes[0]);
	const [bg, setBg] = useState(backgrounds[0]!.value);
	const [padding, setPadding] = useState(["1rem", "2rem", "3rem"]);
	const [currentPadding, setCurrentPadding] = useState(padding[2]);
	const [activeIcon, setActiveIcon] = useState(languages[0].icon);
	const [code, setCode] = useState<string>(initialCode[0]);
	const [selectedImage, setSelectedImage] = useState("");
	// Function to export the code editor content as an image
	const exportPng = async () => {
		const editorElement = editorRef.current;

		if (editorElement) {
			const canvas = await html2canvas(editorElement, {
				backgroundColor: null,
				ignoreElements: (element) => {
					// Ignore elements with the class name "handle"
					return element.classList.contains("handle");
				},
			});

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
		<div className='flex flex-col items-center justify-between px-1 mt-6'>
			{/* Logo Section */}
			<Image
				src='/logo-trs.png'
				alt='logo'
				width={100}
				height={0}
				className='w-40 h-28 object-cover'
			/>

			{/* Introduction Section */}
			<h2
				className={`text-xl max-w-4xl w-[80vw] mx-auto text-center text-[#eee9e5] mb-6`}
			>
				Craft eye-catching code images that capture attention and boost
				engagement.Start typing or paste into the text area to get started.
			</h2>

			{/* Header Component */}
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
				setCurrentPadding={setCurrentPadding}
				exportPng={exportPng}
				code={code}
				setCode={setCode}
				setSelectedImage={setSelectedImage}
			/>

			{/* Editor Section */}
			<div className='mt-10 w-screen flex justify-center text-[#fcfef5]'>
				<div ref={editorRef}>
					<Editor
						background={bg}
						language={language}
						icon={activeIcon}
						theme={theme}
						currentPadding={currentPadding}
						code={code}
						setCode={setCode}
						selectedImage={selectedImage}
						setSelectedImage={setSelectedImage}
					/>
				</div>
			</div>

			{/* Footer Component */}
			<Footer />
		</div>
	);
}

export default Home;
