import React, { BaseSyntheticEvent } from "react";
import BaseSelector from "./BaseSelector";

interface PaddingSelectorProps {
	padding: string[];
	currentPadding: string;
	setCurrentPadding: (bg: string) => void;
}

const PaddingSelector = ({
	padding,
	currentPadding,
	setCurrentPadding,
}: PaddingSelectorProps) => {
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
			dataListId='paddings'
			inputId='padding'
		/>
	);
};

export default PaddingSelector;
