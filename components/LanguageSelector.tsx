import React, { BaseSyntheticEvent } from "react";
import BaseSelector from "./BaseSelector";
import { languages } from "@/utils/utilities";

interface LanguageSelectorProps {
	language: string;
	setActiveIcon: (icon: string) => void;
	setLanguage: (language: string) => void;
}

const LanguageSelector = ({
	language,
	setActiveIcon,
	setLanguage,
}: LanguageSelectorProps) => {
	const handleLangChange = (e: BaseSyntheticEvent) => {
		const newLang = e.target.value;
		setLanguage(newLang);
		const newActiveIcon = languages.find((lang) => lang.name === newLang)?.icon;

		if (newActiveIcon) {
			setActiveIcon(newActiveIcon);
		}
	};

	return (
		<BaseSelector
			options={languages.map((lang) => lang.name)}
			currentValue={language}
			setValue={setLanguage}
			icon='</>'
			placeholder='Select a language'
			dataListId='languages'
			inputId='language'
		/>
	);
};

export default LanguageSelector;
