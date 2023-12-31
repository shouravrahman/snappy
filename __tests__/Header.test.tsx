import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "@/components/Header";
import userEvent from "@testing-library/user-event";

const setLanguage = jest.fn();
const setTheme = jest.fn();
const setBg = jest.fn();
const setCurrentPadding = jest.fn();
const exportPng = jest.fn();
const setCode = jest.fn();
const setSelectedImage = jest.fn();
const setActiveIcon = jest.fn();

describe("Header", () => {
	it("renders header elements", () => {
		render(
			<Header
				language='html'
				theme='monokai'
				bg='white'
				padding={["1rem", "2rem"]}
				currentPadding='1rem'
				exportPng={exportPng}
				code='initial code'
				setCode={setCode}
				setSelectedImage={setSelectedImage}
				setLanguage={setLanguage}
				setTheme={setTheme}
				setBg={setBg}
				setCurrentPadding={setCurrentPadding}
				setActiveIcon={setActiveIcon}
			/>
		);

		// Check for language selector
		const languageSelector = screen.getByText("Html");
		expect(languageSelector).toBeInTheDocument();

		// Check for theme selector
		// const themeSelector = screen.getByRole("button", { name: /Light/i });
		// expect(themeSelector).toBeInTheDocument();

		// Check for other selectors and buttons, similar to above
	});

	// it("calls setLanguage when language is changed", () => {
	// 	// Render component as in the previous test
	// 	render(
	// 		<Header
	// 			language='en'
	// 			theme='light'
	// 			bg='white'
	// 			padding={["none", "small", "medium", "large"]}
	// 			currentPadding='medium'
	// 			exportPng={exportPng}
	// 			code='initial code'
	// 			setCode={setCode}
	// 			setSelectedImage={setSelectedImage}
	// 			setLanguage={setLanguage}
	// 			setTheme={setTheme}
	// 			setBg={setBg}
	// 			setCurrentPadding={setCurrentPadding}
	// 			setActiveIcon={setActiveIcon}
	// 		/>
	// 	);
	// 	const newLanguage = "Html";
	// 	const languageSelector = screen.getByRole("button", { name: /Html/i }); // Adjust selector as needed
	// 	userEvent.click(languageSelector);

	// 	expect(setLanguage).toHaveBeenCalledWith(newLanguage);
	// });

	// Add more tests for other interactions and features
});
