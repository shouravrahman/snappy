import React, { BaseSyntheticEvent, InputHTMLAttributes } from "react";

interface BaseSelectorProps {
	options: string[];
	currentValue: string;
	setValue: (value: string) => void;
	icon?: React.ReactNode | string; // Icon for the selector
	placeholder: string;
	dataListId: string;
	type?: InputHTMLAttributes<HTMLInputElement>["type"];
	inputId: string;
}

const BaseSelector = ({
	options,
	currentValue,
	setValue,
	type,
	icon,
	placeholder,
	dataListId,
	inputId,
}: BaseSelectorProps) => {
	const handleChange = (e: BaseSyntheticEvent) => {
		const newValue = e.target.value;
		setValue(newValue);
	};

	return (
		<div className='text-white flex items-center justify-center p-1'>
			{icon && (
				<div className='text-2xl  border-[1px] border-gray-600 rounded-sm'>
					{icon}
				</div>
			)}
			<input
				className='bg-[#222] w-full text-white p-1 rounded-sm outline-none border-[1px] border-gray-600'
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
