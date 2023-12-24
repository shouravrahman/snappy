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
	return (
		<header className='max-w-6xl w-[80vw] bg-[#18181B] p-4 mx-auto flex items-center justify-center rounded-md'>
			<div className='flex flex-col md:flex-row gap-4 items-center justify-between'>
				<LanguageSelector
					language={language}
					setLanguage={setLanguage}
					setActiveIcon={setActiveIcon}
				/>
				<ThemeSelector theme={theme} setTheme={setTheme} />
			</div>
			<div className='flex flex-col md:flex-row gap-4 items-center justify-between'>
				<BackgroundSelector bg={bg} setBg={setBg} />
				<PaddingSelector
					padding={padding}
					currentPadding={currentPadding}
					setCurrentPadding={setCurrentPadding}
				/>
			</div>
			<div className='cursor-pointer w-[20%]'>
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
