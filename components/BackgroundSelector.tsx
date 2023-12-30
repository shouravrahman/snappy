import { backgrounds } from "@/utils/utilities";
import React, { useState } from "react";
import BaseSelector from "./BaseSelector";

interface BackgroundSelectorProps {
	bg: string;
	setBg: (bg: string) => void;
}

const BackgroundSelector = ({ bg, setBg }: BackgroundSelectorProps) => {
	const [selectedName, setSelectedName] = useState(
		backgrounds.find((b) => b.value === bg)?.name || backgrounds[0].name
	);

	const handleNameChange = (newName: string) => {
		const newBg = backgrounds.find((b) => b.name === newName)?.value;
		setBg(newBg!);
		setSelectedName(newName);
	};
	console.log(backgrounds.map((b) => b.name));

	return (
		<BaseSelector
			options={backgrounds.map((b) => b.name)}
			currentValue={selectedName}
			setValue={handleNameChange}
			icon='🟡'
			placeholder={backgrounds[0].name}
			inputId='background'
		/>
	);
};

export default BackgroundSelector;
