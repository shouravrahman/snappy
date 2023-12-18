import { backgrounds } from "@/utils/utilities";
import { AppWindow, Palette, Pipette } from "lucide-react";
import React, { BaseSyntheticEvent } from "react";
interface PaddingSelectorProps {
	padding: string[];
	currentPadding: string;
	setCurrentPadding: (bg: string) => void;
}
const BackgroundSelector = ({
	padding,
	currentPadding,
	setCurrentPadding,
}: PaddingSelectorProps) => {
	const handlePaddingChange = (e: BaseSyntheticEvent) => {
		console.log(e);
		const newPadding = e.target.value;
		setCurrentPadding(newPadding);
	};
	return (
		<div className='text-white flex items-center justify-center'>
			<label className='sr-only' htmlFor='background'>
				padding:
			</label>
			<AppWindow className='h-8 w-8 p-1 border ' />
			<input
				className=' px-3 py-[3px] bg-transparent border '
				list='paddings'
				id='padding'
				name='padding'
				placeholder={padding[0]}
				onChange={handlePaddingChange}
			/>
			<datalist id='paddings'>
				{padding.map((pad, i) => (
					<option key={i} value={pad}></option>
				))}
			</datalist>
		</div>
	);
};

export default BackgroundSelector;
