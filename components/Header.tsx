import React from "react";
import LanguageSelector from "@/components/LanguageSelector";
import ThemeSelector from "@/components/ThemeSelector";
import BackgroundSelector from "@/components/BackgroundSelector";
import PaddingSelector from "@/components/PaddingSelector";
import { Download } from "lucide-react";

interface HeaderProps {
	language: string;
	setLanguage: (lang: string) => void;
	setActiveIcon: (icon: string) => void;
	theme: string;
	setTheme: (theme: string) => void;
	bg: string;
	setBg: (bg: string) => void;
	padding: string[];
	currentPadding: string;
	setCurrentPadding: (padding: string) => void;
	exportPng: () => void;
}
const Header = ({
	language,
	setLanguage,
	setActiveIcon,
	theme,
	setTheme,
	bg,
	setBg,
	padding,
	currentPadding,
	setCurrentPadding,
	exportPng,
}: HeaderProps) => {
	// console.log(bg);
	return (
		<header
			className={`max-w-7xl w-full bg-[${bg}] px-4 py-2 mx-auto flex items-center justify-between rounded-md`}
		>
			<div className='flex flex-col md:flex-row gap-2 items-center justify-between flex-grow-1'>
				<LanguageSelector
					language={language}
					setLanguage={setLanguage}
					setActiveIcon={setActiveIcon}
				/>
				<ThemeSelector theme={theme} setTheme={setTheme} />
			</div>
			<div className='flex flex-col md:flex-row gap-2 items-center justify-between flex-grow-1'>
				<PaddingSelector
					padding={padding}
					currentPadding={currentPadding}
					setCurrentPadding={setCurrentPadding}
				/>
				<BackgroundSelector bg={bg} setBg={setBg} />
			</div>
			<div className='cursor-pointer flex-grow-0'>
				<button
					className='flex justify-between items-center py-2 px-3 rounded text-sm font-semibold text-white hover:text-yellow-600 bg-slate-700'
					onClick={exportPng}
				>
					<Download className=' mr-1 w-4 h-4' />
					Export
				</button>
			</div>
		</header>
	);
};

export default Header;
