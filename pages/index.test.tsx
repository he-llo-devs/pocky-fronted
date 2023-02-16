import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Home from '.';

describe("Index page", (): void => {
	it("Renders page", (): void => {
		const component = render(<Home/>);
		component.getByText("Desde Home");
	});
});