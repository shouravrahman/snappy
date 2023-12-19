"use client";
import React, { useState, useEffect } from "react";
import { Resizable } from "re-resizable";
import AceEditor from "react-ace";

// Dynamically import only the needed Ace Editor modes and themes
const importAceBuilds = async () => {
	await import("ace-builds/src-noconflict/ext-language_tools");
	await import("ace-builds/src-noconflict/theme-github");
	await import("ace-builds/src-noconflict/theme-monokai");
	await import("ace-builds/src-noconflict/mode-javascript");
	await import("ace-builds/src-noconflict/mode-python");
	await import("ace-builds/src-noconflict/mode-java");
	await import("ace-builds/src-noconflict/mode-typescript");
	await import("ace-builds/src-noconflict/mode-html");
	await import("ace-builds/src-noconflict/mode-css");
	await import("ace-builds/src-noconflict/mode-json");

	await import("ace-builds/src-noconflict/theme-cobalt");
	await import("ace-builds/src-noconflict/theme-terminal");
	await import("ace-builds/src-noconflict/theme-twilight");
	// Import other themes and modes as needed
};

interface EditorProps {
	language: string;
	theme: string;
	icon: string;
	background?: string;
	currentPadding?: string;
}

const Editor: React.FC<EditorProps> = ({
	icon,
	language,
	background,
	currentPadding,
	theme,
}: EditorProps) => {
	const [width, setWidth] = useState<number>(1100);
	const [height, setHeight] = useState<number>(500);
	const [title, setTitle] = useState<string>("Untitled-1");
	const [code, setCode] = useState<string>("");

	const handleCodeChange = (newCode: string) => {
		setCode(newCode);
	};

	const handleResize = (_: any, __: any, ref: any) => {
		const newHeight = ref.style.height;
		setHeight(parseInt(newHeight, 10));
	};

	const updateSize = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		updateSize();
		window.addEventListener("resize", updateSize);
		// Dynamically import Ace Editor builds
		importAceBuilds();
		return () => window.removeEventListener("resize", updateSize);
	}, []);

	return (
		<Resizable
			maxWidth={1300}
			minHeight={500}
			defaultSize={{ width, height }}
			onResize={handleResize}
			className='rounded'
			style={{ background, padding: currentPadding }}
		>
			<div className='code-block'>
				<div className='code-title h-[60px] px-4 flex items-center justify-between bg-black bg-opacity-80'>
					<div className='flex items-center p-4 gap-1'>
						<div className='w-3 h-3 rounded-full bg-[#ff5656]'></div>
						<div className='w-3 h-3 rounded-full bg-[#ff5656]'></div>
						<div className='w-3 h-3 rounded-full bg-[#ff5656]'></div>
					</div>
					<div>
						<input
							type='text'
							className='w-full text-white outline-none font-medium text-center bg-transparent p-2'
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</div>
					<div className='icon flex justify-center items-center bg-white rounded-full p-1'>
						{/* icon */}
						<img src={icon} width={25} height={25} alt='icon' />
					</div>
				</div>
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
					focus
				/>
			</div>
		</Resizable>
	);
};

export default Editor;
