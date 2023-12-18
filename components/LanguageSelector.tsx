"use client";

import { languages } from "@/utils/utilities";
import { ChevronDown, Code2, Languages } from "lucide-react";
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
			<Code2 className='h-8 w-8 p-1 border ' />
			<input
				className=' px-3 py-[3px] bg-transparent border'
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
