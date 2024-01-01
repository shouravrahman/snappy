import BaseSelector from "./BaseSelector";

const ImageSelector = ({ setSelectedImage }: any) => {
	const images = [
		"anim.webp",
		"anim2.webp",
		"binary-rain.webp",
		"blob.webp",
		"camo.webp",
		"cloud.webp",
		"code.webp",
		"codegeass.webp",
		"color-sabotage.webp",
		"color-sabotage2.webp",
		"cosmic.webp",
		"creamy.webp",
		"droplet.webp",
		"fern.webp",
		"geometry.webp",
		"gibberish.webp",
		"hero-pattern.webp",
		"peakpx.webp",
		"tile.webp",
		"zero-one.webp",
		// Add more images with personalized names and webp format as needed
	];
	const handleImageChange = (img: string) => {
		setSelectedImage(img);
	};
	return (
		<BaseSelector
			options={images}
			currentValue={""}
			setValue={setSelectedImage}
			icon='📷'
			placeholder={"select Image"}
			inputId='background'
		/>
	);
};
export default ImageSelector;
