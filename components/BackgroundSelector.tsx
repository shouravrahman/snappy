import { backgrounds } from "@/utils/utilities";
import { Palette, Pipette } from "lucide-react";
import React, { BaseSyntheticEvent } from "react";
interface BackgroundSelectorProps {
	bg: string;
	setBg: (bg: string) => void;
}
const BackgroundSelector = ({ bg, setBg }: BackgroundSelectorProps) => {
	const handleBackgroundChange = (e: BaseSyntheticEvent) => {
		console.log(e);
		const newBg = e.target.value;
		setBg(newBg);
	};
	return (
		<div className='text-white flex items-center justify-center'>
			<label className='sr-only' htmlFor='background'>
				Background:
			</label>

			<Pipette className='h-8 w-8 p-1 border ' />
			<input
				className='px-3 py-[15px] bg-transparent border '
				type='color'
				list='backgrounds'
				id='background'
				name='background'
				// placeholder={backgrounds[0]}
				onChange={handleBackgroundChange}
			/>
			<datalist id='backgrounds'>
				{backgrounds.map((bg, i) => (
					<option key={i} value={bg}></option>
				))}
			</datalist>
		</div>
	);
};

export default BackgroundSelector;
