import React, { BaseSyntheticEvent } from "react";
import BaseSelector from "./BaseSelector";
import { themes } from "@/utils/utilities";

interface ThemeSelectorProps {
	theme: string;
	setTheme: (theme: string) => void;
}

const ThemeSelector = ({ theme, setTheme }: ThemeSelectorProps) => {
	const handleThemeChange = (e: BaseSyntheticEvent) => {
		const newTheme = e.target.value;
		setTheme(newTheme);
	};

	return (
		<BaseSelector
			options={themes}
			currentValue={theme}
			setValue={setTheme}
			icon='🎨'
			placeholder='Select a theme'
			dataListId='themes'
			inputId='theme'
		/>
	);
};

export default ThemeSelector;
