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
			{/* <Pipette className='h-6 w-6 text-white mr-2' /> */}
			<div className='text-2xl mr-2'>🟡</div>

			<input
				className='bg-[#222] h-[2.5rem] text-white p-2 rounded outline-none '
				type='color'
				list='backgrounds'
				id='background'
				name='background'
				placeholder={backgrounds[1]}
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
