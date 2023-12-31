import { render, screen } from "@testing-library/react";
import BaseSelector from "@/components/BaseSelector";

describe("BaseSelector", () => {
	it("renders options and selected value", () => {
		const options = ["Option 1", "Option 2", "Option 3"];
		const currentValue = "Option 2";
		const setValue = jest.fn();
		const placeholder = "Select an option";
		const inputId = "language";
		render(
			<BaseSelector
				options={options}
				currentValue={currentValue}
				setValue={setValue}
				placeholder={placeholder}
				inputId={inputId}
			/>
		);

		// Check options
		const renderedOptions = screen.getAllByRole("option");
		expect(renderedOptions).toHaveLength(options.length);

		// Check selected value
		const selectedOption = screen.getByRole("option", { selected: true });
		expect(selectedOption).toHaveTextContent(currentValue);
	});
});
