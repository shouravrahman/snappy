"use client";

import { languages, themes } from "@/utils/utilities";
import { ChevronDown, Code2, Languages, Palette } from "lucide-react";
import React, { BaseSyntheticEvent, SyntheticEvent } from "react";

interface ThemeSelectorProps {
	theme: string;
	setTheme: (theme: string) => void;
}

const ThemeSelector = ({ theme, setTheme }: ThemeSelectorProps) => {
	const handleThemeChange = (e: BaseSyntheticEvent) => {
		console.log(e);
		const newTheme = e.target.value;
		setTheme(newTheme);
	};

	return (
		<div className='text-white flex items-center justify-center'>
			<label className='sr-only' htmlFor='language'>
				Theme:
			</label>
			<Palette className='h-8 w-8 p-1 border ' />
			<input
				className=' px-3 py-[3px] bg-transparent border '
				list='themes'
				id='language'
				name='language'
				placeholder={theme}
				onChange={handleThemeChange}
			/>
			<datalist id='themes'>
				{themes.map((theme, i) => (
					<option key={i} value={theme}></option>
				))}
			</datalist>
		</div>
	);
};

export default ThemeSelector;
