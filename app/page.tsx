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
		<div className='flex flex-col items-center justify-between '>
			<header className='max-w-6xl w-full mt-10 p-4  flex justify-center items-center gap-8 z-10 bg-[#0a0a0a] rounded border border-[#3c3c3c] shadow-md'>
				<LanguageSelector
					language={language}
					setLanguage={setLanguage}
					setActiveIcon={setActiveIcon}
				/>
				<ThemeSelector theme={theme} setTheme={setTheme} />
				<BackgroundSelector bg={bg} setBg={setBg} />
				<PaddingSelector
					padding={padding}
					currentPadding={currentPadding}
					setCurrentPadding={setCureentPadding}
				/>
				<div className='ml-auto cursor-pointer'>
					<button
						className='flex justify-between items-center py-2 px-3 rounded text-sm font-medium text-yellow-400 hover:text-yellow-600 bg-slate-700'
						onClick={exportPng}
					>
						<Download className='mr-2 w-4 h-4' />
						Export PNG
					</button>
				</div>
			</header>

			<div className='mt-10 h-full mx-auto' ref={editorRef}>
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
