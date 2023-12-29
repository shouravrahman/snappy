import React, { BaseSyntheticEvent, InputHTMLAttributes } from "react";

// Interface for BaseSelector component props
interface BaseSelectorProps {
	options: string[];
	currentValue: string;
	setValue: (value: string) => void;
	icon?: React.ReactNode | string; // Icon for the selector
	placeholder: string;
	dataListId: string;
	type?: InputHTMLAttributes<HTMLInputElement>["type"];
	inputId: string;
	onChange?: (e: React.BaseSyntheticEvent) => void;
}

// BaseSelector Component
const BaseSelector = ({
	options,
	currentValue,
	setValue,
	type,
	icon,
	placeholder,
	dataListId,
	inputId,
	onChange,
}: BaseSelectorProps) => {
	// Function to handle change in selector value
	const handleChange = (e: BaseSyntheticEvent) => {
		const newValue = e.target.value;
		setValue(newValue);
		onChange && onChange(e);
	};

	return (
		<div className='text-white flex items-center justify-between p-2'>
			{icon && (
				<div className='text-2xl border border-zinc-100/40 rounded-sm'>
					{icon}
				</div>
			)}
			<input
				className='bg-[#222] w-[300px] text-white p-1 rounded-sm outline-none border border-zinc-100/40'
				list={dataListId}
				id={inputId}
				name={inputId}
				placeholder={placeholder}
				value={currentValue}
				onChange={handleChange}
				type={type}
			/>
			<datalist id={dataListId}>
				{options.map((option, i) => (
					<option key={i} value={option}></option>
				))}
			</datalist>
		</div>
	);
};

export default BaseSelector;
