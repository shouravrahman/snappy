import React, { BaseSyntheticEvent } from "react";
import BaseSelector from "./BaseSelector";

// Interface for PaddingSelector component props
interface PaddingSelectorProps {
	padding: string[];
	currentPadding: string;
	setCurrentPadding: (bg: string) => void;
}

// PaddingSelector Component
const PaddingSelector = ({
	padding,
	currentPadding,
	setCurrentPadding,
}: PaddingSelectorProps) => {
	// Function to handle padding change
	const handlePaddingChange = (e: BaseSyntheticEvent) => {
		const newPadding = e.target.value;
		setCurrentPadding(newPadding);
	};

	return (
		<BaseSelector
			options={padding}
			currentValue={currentPadding}
			setValue={setCurrentPadding}
			icon='⏹️'
			placeholder='Select a padding'
			inputId='padding'
		/>
	);
};

export default PaddingSelector;
