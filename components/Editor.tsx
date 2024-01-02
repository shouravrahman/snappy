// Import necessary dependencies and styles
import React, { useState, useEffect } from "react";
import { Resizable } from "re-resizable";
import AceEditor from "react-ace";
import Image from "next/image";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-language_tools";

// Import Ace Editor modes and themes
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-jsx";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/mode-mysql";

import "ace-builds/src-noconflict/theme-cobalt";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-chaos";
import "ace-builds/src-noconflict/theme-cloud9_night";
import "ace-builds/src-noconflict/theme-crimson_editor";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
// Interface for props
interface EditorProps {
	language: string;
	theme: string;
	icon: string;
	background: string;
	currentPadding?: string;
	code: string;
	setCode: (code: string) => void;
	setBackground: (bg: string) => void;
	selectedImage: string;
	setSelectedImage: (image: string) => void;
}

// Editor Component
const Editor: React.FC<EditorProps> = ({
	icon,
	language,
	background,
	currentPadding,
	theme,
	code,
	setCode,
	setSelectedImage,
	selectedImage,
}: EditorProps) => {
	console.log(selectedImage);
	// State for managing editor size
	const [width, setWidth] = useState<number>(1100);
	const [height, setHeight] = useState<number>(500);

	// State for managing title
	const [title, setTitle] = useState<string>("Untitled-1");

	// Function to handle code change
	const handleCodeChange = (newCode: string) => {
		setCode(newCode);
	};

	// Function to handle resizing
	const handleResize = (_: any, __: any, ref: any) => {
		const newHeight = ref.style.height;
		setHeight(parseInt(newHeight, 10));
	};

	// Function to update size based on window resize
	const updateSize = () => {
		setWidth(window.innerWidth);
	};

	// Effect to update size on initial load and window resize
	useEffect(() => {
		updateSize();
		window.addEventListener("resize", updateSize);
		return () => window.removeEventListener("resize", updateSize);
	}, []);

	useEffect(() => {
		if (selectedImage.length > 1) {
			setSelectedImage("");
		}
	}, [background]);

	// JSX structure for the resizable editor
	return (
		<Resizable
			maxWidth={"80vw"}
			minWidth={450}
			minHeight={500}
			defaultSize={{ width, height }}
			onResize={handleResize}
			className='rounded relative'
			style={{
				padding: currentPadding,
				clipPath: selectedImage ? "inset-y-[20px]" : "none", // Adjust the inset value as needed
				background: selectedImage ? `url(${selectedImage})` : background,
			}}
		>
			{/* Handles for resizing */}
			<div className='handle  absolute left-1/2 -top-1 w-2 h-2 rounded-full bg-[#DFBA69] hover:bg-slate-300'></div>
			<div className='handle  absolute left-1/2 -bottom-1 w-2 h-2 rounded-full bg-[#DFBA69] hover:bg-slate-300'></div>
			<div className='handle  absolute -left-1 top-1/2 w-2 h-2 rounded-full bg-[#DFBA69] hover:bg-slate-300'></div>
			<div className='handle  absolute -right-1 top-1/2 w-2 h-2 rounded-full bg-[#DFBA69] hover:bg-slate-300'></div>

			{/* Code block containing title and Ace Editor */}
			<div
				className={`code-block relative ${
					selectedImage ? "bg-[#180c0c]" : "bg-transparent"
				}`}
			>
				{/* Code title section */}
				<div className='code-title h-[60px] px-4 flex items-center justify-between bg-black '>
					<div className='flex items-center p-4 gap-1'>
						{/* Placeholder icons */}
						<div className='w-3 h-3 rounded-full bg-[#E9FFE1]'></div>
						<div className='w-3 h-3 rounded-full bg-[#E9FFE1]'></div>
						<div className='w-3 h-3 rounded-full bg-[#E9FFE1]'></div>
					</div>
					{/* Title input */}
					<div>
						<input
							type='text'
							className='w-full text-[#fcfef5] outline-none font-medium text-center bg-transparent p-2'
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</div>
					{/* Icon section */}
					<div className='icon flex justify-center items-center bg-[#fcfef5] rounded-full p-1'>
						{/* Display icon */}
						<Image src={icon} width={20} height={20} alt='icon' />
					</div>
				</div>

				{/* Ace Editor for code input */}
				<AceEditor
					value={code}
					fontSize={16}
					theme={theme}
					mode={language.toLowerCase()}
					name='UNIQUE_ID_OF_DIV'
					showGutter={false}
					width='100%'
					height={`calc(${height}px - ${currentPadding} - ${currentPadding} - 60px)`}
					wrapEnabled
					showPrintMargin={false}
					highlightActiveLine={false}
					editorProps={{ $blockScrolling: true }}
					onChange={handleCodeChange}
					// focus
				/>
			</div>
		</Resizable>
	);
};

export default Editor;
