import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";

describe("Footer", () => {
	it("renders footer links", () => {
		render(<Footer />);

		// Check if the links are rendered
		const links = screen.getAllByRole("link");

		// Check if there are three links
		expect(links).toHaveLength(3);

		// Check each link individually if it's in the document
		links.forEach((link) => {
			expect(link).toBeInTheDocument();
		});
	});
});
