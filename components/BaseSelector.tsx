import React, { BaseSyntheticEvent, InputHTMLAttributes } from "react";

interface BaseSelectorProps {
	options: string[];
	currentValue: string;
	setValue: (value: string) => void;
	icon?: React.ReactNode | string;
	placeholder: string;
	inputId: string;
	onChange?: (e: React.BaseSyntheticEvent) => void;
}

const BaseSelector = ({
	options,
	currentValue,
	setValue,
	icon,
	placeholder,
	inputId,
	onChange,
}: BaseSelectorProps) => {
	const handleChange = (e: BaseSyntheticEvent) => {
		const newValue = e.target.value;
		setValue(newValue);
		onChange && onChange(e);
	};

	return (
		<div className='text-[#fcfef5] flex items-center justify-between p-2'>
			{icon && (
				<div className='text-2xl border border-[#E9FFE1] rounded-sm'>
					{icon}
				</div>
			)}
			<select
				className='bg-[#0a0a0a] w-[300px] text-[#fcfef5] p-1 rounded-sm outline-none border border-[#E9FFE1]'
				id={inputId}
				name={inputId}
				value={currentValue}
				onChange={handleChange}
				aria-label={placeholder}
			>
				<option value='' disabled selected hidden>
					{placeholder}
				</option>
				{options.map((option, i) => (
					<option key={i} value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	);
};

export default BaseSelector;
