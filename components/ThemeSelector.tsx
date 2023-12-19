"use client";

import { themes } from "@/utils/utilities";
import { Palette } from "lucide-react";
import { BaseSyntheticEvent } from "react";

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
			<Palette className='text-white h-6 w-6 mr-2' />
			<input
				className=' bg-[#222] w-[60%] text-white p-2 rounded outline-none'
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
