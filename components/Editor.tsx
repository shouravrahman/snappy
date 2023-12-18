"use client";
import React, { useState, useEffect } from "react";
import { Resizable } from "re-resizable";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-json";

import "ace-builds/src-noconflict/ext-language_tools";

import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-cobalt";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-twilight";
import Image from "next/image";
import { initialCode } from "@/utils/utilities";

interface EditorProps {
	language: string;
	theme: string;
	icon: string;
	background?: string;
	currentPadding?: string;
}

const Editor = ({
	icon,
	language,
	background,
	currentPadding,
	theme,
}: EditorProps) => {
	const [width, setWidth] = useState(1000);
	const [height, setHeight] = useState(500);
	const [title, setTitle] = useState("Untitled-1");
	const [code, setCode] = useState(initialCode);

	const handleCodeChange = () => {};

	const handleResize = (e: any, direction: any, ref: any, pos: any) => {
		const newHeight = ref.style.height;
		setHeight(parseInt(newHeight, 10));
	};

	const updateSize = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);

	return (
		<Resizable
			minHeight={510}
			minWidth={510}
			maxWidth={1000}
			defaultSize={{
				width: width,
				height: height,
			}}
			onResize={handleResize}
			className='rounded '
			style={{ background: background, padding: currentPadding }}
		>
			<div className='code-block '>
				<div className='code-title h-[60px] px-4 flex items-center justify-between bg-black bg-opacity-80'>
					<div className='flex items-center p-4 gap-1'>
						<div className='w-3 h-3 rounded-full bg-[#ff5656]'></div>
						<div className='w-3 h-3 rounded-full bg-[#ff5656]'></div>
						<div className='w-3 h-3 rounded-full bg-[#ff5656]'></div>
					</div>
					<div className='input w-full'>
						<input
							type='text'
							className='w-full text-white outline-none font-medium text-center bg-transparent p-2'
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</div>
					<div className='icon flex justify-center items-center bg-white  rounded-full p-1'>
						{/* icon */}
						<Image src={icon} width={25} height={25} alt='icon' />
					</div>
				</div>
				<AceEditor
					value={code}
					fontSize={16}
					theme={theme}
					mode={language.toLowerCase()}
					name='UNIQUE_ID_OF_DIV'
					showGutter={false}
					height={`calc(${height}px - ${currentPadding} - ${currentPadding} - 60px)`}
					wrapEnabled
					showPrintMargin={false}
					highlightActiveLine={false}
					editorProps={{ $blockScrolling: true }}
					className='ace-editor'
					onChange={handleCodeChange}
				/>
			</div>
		</Resizable>
	);
};

export default Editor;
