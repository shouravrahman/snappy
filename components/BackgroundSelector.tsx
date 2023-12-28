import { backgrounds } from "@/utils/utilities";
import { Pipette } from "lucide-react";
import React from "react";
import BaseSelector from "./BaseSelector";

// Interface for BackgroundSelector component props
interface BackgroundSelectorProps {
	bg: string;
	setBg: (bg: string) => void;
}

// BackgroundSelector Component
const BackgroundSelector = ({ bg, setBg }: BackgroundSelectorProps) => {
	return (
		<BaseSelector
			options={backgrounds}
			currentValue={bg}
			setValue={setBg}
			icon='🟡'
			placeholder={backgrounds[1]}
			dataListId='backgrounds'
			type='color'
			inputId='background'
		/>
	);
};

export default BackgroundSelector;
