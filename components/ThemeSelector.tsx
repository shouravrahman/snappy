import React, { BaseSyntheticEvent } from "react";
import BaseSelector from "./BaseSelector";
import { themes } from "@/utils/utilities";

// Interface for ThemeSelector component props
interface ThemeSelectorProps {
	theme: string;
	setTheme: (theme: string) => void;
}

// ThemeSelector Component
const ThemeSelector = ({ theme, setTheme }: ThemeSelectorProps) => {
	// Function to handle theme change
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
			inputId='theme'
		/>
	);
};

export default ThemeSelector;
