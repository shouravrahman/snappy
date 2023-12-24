"use client";

import { languages } from "@/utils/utilities";
import { BracketsIcon, ChevronDown, Code2, Languages } from "lucide-react";
import React, { BaseSyntheticEvent, SyntheticEvent } from "react";

interface LanguageSelectorProps {
	language: string;
	setLanguage: (language: string) => void;
	setActiveIcon: (icon: string) => void;
}

const LanguageSelector = ({
	language,
	setActiveIcon,
	setLanguage,
}: LanguageSelectorProps) => {
	const handleLangChange = (e: BaseSyntheticEvent) => {
		console.log(e);
		const newLang = e.target.value;
		setLanguage(newLang);
		const newActiveIcon = languages.find((lang) => lang.name === newLang)?.icon;

		if (newActiveIcon) {
			setActiveIcon(newActiveIcon);
		}
	};

	return (
		<div className='text-white flex items-center justify-center'>
			<label className='sr-only' htmlFor='language'>
				Language:
			</label>
			{/* <Code2 className='text-white h-6 w-6 mr-2' /> */}
			<div className='text-2xl mr-2'>👨‍💻</div>
			{/* <Code2 className='h-8 w-8 p-1 border ' /> */}
			<input
				className='bg-[#222] w-[20vw] md:w-[10vw] text-white p-2 rounded outline-none'
				list='languages'
				id='language'
				name='language'
				placeholder={language}
				onChange={handleLangChange}
			/>
			<datalist id='languages'>
				{languages.map((lang) => (
					<option key={lang.name} value={lang.name}></option>
				))}
			</datalist>
		</div>
	);
};

export default LanguageSelector;
