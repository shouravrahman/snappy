import BaseSelector from "./BaseSelector";

const ImageSelector = ({ setSelectedImage }) => {
	const images = [
		"images/img1.jpg",
		"images/img2.jpg",
		"images/img3.jpg",
		"images/anim.jpg",
		"images/anim2.jpeg",
		"images/pattern2.jpg",
		"images/pattern3.png",
		"images/pattern4.jpg",
		"images/pattern5.jpg",
		"images/pattern6.jpg",
		"images/pattern7.jpg",
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
