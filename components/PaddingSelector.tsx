import { AppWindow } from "lucide-react";
import { BaseSyntheticEvent } from "react";
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
		console.log(e);
		const newPadding = e.target.value;
		setCurrentPadding(newPadding);
	};
	return (
		<div className='text-white flex items-center justify-center'>
			<label className='sr-only' htmlFor='background'>
				padding:
			</label>
			{/* <AppWindow className='text-white h-6 w-6 mr-2' /> */}
			<div className='text-2xl mr-2'>⏹️</div>

			<input
				className='bg-[#222] w-[60%] text-white p-2 rounded outline-none'
				list='paddings'
				id='padding'
				name='padding'
				placeholder={padding[2]}
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

export default PaddingSelector;
