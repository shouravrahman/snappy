"use client";
import BackgroundSelector from "@/components/BackgroundSelector";
import Editor from "@/components/Editor";
import Footer from "@/components/Footer";
import LanguageSelector from "@/components/LanguageSelector";
import PaddingSelector from "@/components/PaddingSelector";
import ThemeSelector from "@/components/ThemeSelector";
import { backgrounds, languages, themes } from "@/utils/utilities";
import { Download } from "lucide-react";
import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import Header from "@/components/Header";

function Home() {
	const editorRef = useRef(null);

	const [language, setLanguage] = useState(languages[0].name);
	const [theme, setTheme] = useState(themes[0]);
	const [bg, setBg] = useState(backgrounds[1]);
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
		<div className='flex flex-col items-center justify-between sm:px-4'>
			<h1 className='text-6xl text-yellow-400 mt-10 p-2'>Snappy!</h1>
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

			<div className='mt-10 w-full h-full mx-auto m-2' ref={editorRef}>
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
