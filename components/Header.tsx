// Import necessary components and dependencies
import LanguageSelector from "@/components/LanguageSelector";
import ThemeSelector from "@/components/ThemeSelector";
import BackgroundSelector from "@/components/BackgroundSelector";
import PaddingSelector from "@/components/PaddingSelector";
import { Download } from "lucide-react";
import beautify from "js-beautify";

// Interface for component props
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
	code: string;
	setCode: (code: string) => void;
}

// Header Component
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
	code,
	setCode,
}: HeaderProps) => {
	// Function to format code using js-beautify library
	const formatCode = () => {
		const formattedCode = beautify(code, { indent_size: 2 });
		setCode(formattedCode);
	};

	return (
		// Header section with dynamic background based on 'bg' prop
		<header
			className={`max-w-full md:max-w-6xl w-full bg-[${bg}] space-x-4 flex items-center justify-between rounded-md`}
		>
			{/* Language and Theme selector section */}
			<div className='flex items-center justify-center flex-wrap space-x-2'>
				<LanguageSelector
					language={language}
					setLanguage={setLanguage}
					setActiveIcon={setActiveIcon}
				/>
				<ThemeSelector theme={theme} setTheme={setTheme} />

				<PaddingSelector
					padding={padding}
					currentPadding={currentPadding}
					setCurrentPadding={setCurrentPadding}
				/>
				<BackgroundSelector bg={bg} setBg={setBg} />

				{/* Code format button */}
				<button
					className='text-2xl border border-yellow-200 rounded'
					onClick={formatCode}
				>
					✨
				</button>
				<button
					className='py-2 px-4 rounded text-sm font-semibold text-white hover:text-yellow-600 bg-slate-700'
					onClick={exportPng}
				>
					<Download className='mr-1 w-4 h-6' />
				</button>
			</div>
		</header>
	);
};

export default Header;
