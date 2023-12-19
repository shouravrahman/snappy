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
		<header className='max-w-6xl w-[40rem] mt-10 px-4 py-2 flex justify-center items-center gap-8 z-10 bg-[#0a0a0a] rounded border border-white/80 shadow-md'>
			<div>
				<LanguageSelector
					language={language}
					setLanguage={setLanguage}
					setActiveIcon={setActiveIcon}
				/>
				<ThemeSelector theme={theme} setTheme={setTheme} />
			</div>
			<div>
				<BackgroundSelector bg={bg} setBg={setBg} />
				<PaddingSelector
					padding={padding}
					currentPadding={currentPadding}
					setCurrentPadding={setCurrentPadding}
				/>
			</div>
			<div className=' cursor-pointer'>
				<button
					className='flex justify-between items-center py-2 px-3 rounded text-sm font-medium text-yellow-400 hover:text-yellow-600 bg-slate-700'
					onClick={exportPng}
				>
					<Download className='mr-1 w-4 h-4' />
					Export PNG
				</button>
			</div>
		</header>
	);
};

export default Header;
