"use client";
import React from "react";
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

interface EditorProps {
	onCodeChange: (code: string) => void;
	language: string;
	theme: string;
	icon: string;
	background?: string;
	currentPadding?: string;
}

const Editor = ({
	onCodeChange,
	icon,
	language,
	background,
	currentPadding,
	theme,
}: EditorProps) => {
	return (
		<Resizable
			className='bg-white'
			minHeight={510}
			minWidth={510}
			maxWidth={1000}
		>
			<div className='w-full'>
				<AceEditor
					value="function() => {function() { return 'Hello from snappy'} }"
					fontSize={16}
					theme='monokai'
					mode={language.toLowerCase()}
					name='UNIQUE'
					showGutter={false}
					wrapEnabled
					showPrintMargin={false}
					highlightActiveLine={false}
					editorProps={{ $blockScrolling: true }}
					className='w-full'
				/>
			</div>
		</Resizable>
	);
};

export default Editor;
