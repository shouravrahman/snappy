"use client";
import React, { useState, useEffect } from "react";
import { Resizable } from "re-resizable";
import AceEditor from "react-ace";
import Image from "next/image";
import "ace-builds/src-noconflict/ext-language_tools";

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
import { initialCode } from "@/utils/utilities";
import beautify from "js-beautify";
// languages.forEach((lang) => {
// 	require(`ace-builds/src-noconflict/mode-${lang}`);

// });

// Import other themes and modes as needed
// import Beautify from "ace-builds/src-noconflict/ext-beautify";
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
	const [code, setCode] = useState<string>(initialCode[2]);

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

	const formatCode = () => {
		const formattedCode = beautify(code, { indent_size: 2 });
		setCode(formattedCode);
	};

	useEffect(() => {
		updateSize();
		window.addEventListener("resize", updateSize);
		return () => window.removeEventListener("resize", updateSize);
	}, []);

	return (
		<Resizable
			maxWidth={"80vw"}
			minWidth={450}
			minHeight={500}
			defaultSize={{ width, height }}
			onResize={handleResize}
			className='rounded relative'
			style={{ background, padding: currentPadding }}
		>
			<div className='handle  absolute left-1/2 -top-1 w-2 h-2 rounded-full bg-yellow-500 hover:bg-slate-300'></div>
			<div className='handle  absolute left-1/2 -bottom-1 w-2 h-2 rounded-full bg-yellow-500 hover:bg-slate-300'></div>
			<div className='handle  absolute -left-1 top-1/2 w-2 h-2 rounded-full bg-yellow-500 hover:bg-slate-300'></div>
			<div className='handle  absolute -right-1 top-1/2 w-2 h-2 rounded-full bg-yellow-500 hover:bg-slate-300'></div>
			<div className='code-block'>
				<div className='code-title h-[60px] px-4 flex items-center justify-between bg-black '>
					<div className='flex items-center p-4 gap-1'>
						<div className='w-3 h-3 rounded-full bg-yellow-200'></div>
						<div className='w-3 h-3 rounded-full bg-yellow-200'></div>
						<div className='w-3 h-3 rounded-full bg-yellow-200'></div>
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
						<Image src={icon} width={20} height={20} alt='icon' />
					</div>
					<button className='text-2xl' onClick={formatCode}>
						✨
					</button>
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
					// focus
				/>
			</div>
		</Resizable>
	);
};

export default Editor;
