import '@testing-library/jest-dom/extend-expect';
import { cleanup, render, renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { I18nextProvider, useTranslation } from 'react-i18next';

import Home from '.';

describe("Index page", (): void => {
	afterEach(cleanup);

	it("should renders page", (): void => {
		const component = render(<Home/>);
		const h1 = component.getByRole('heading');
		expect(h1).toBeInTheDocument();
	});

	it("should render properly in Spanish", (): void => {
		const t = renderHook(() => useTranslation());

		const component = render(
			<I18nextProvider i18n={t.result.current.i18n}>
				<Home/>
			</I18nextProvider>
		);
		
		expect(component.getByText("Bienvenido a Pocky")).toBeInTheDocument();
	});

	it("should render properly in English", (): void => {
		const t = renderHook(() => useTranslation());
		act(() => {
			t.result.current.i18n.changeLanguage("en");
		});

		const component = render(
			<I18nextProvider i18n={t.result.current.i18n}>
				<Home/>
			</I18nextProvider>
		);
		expect(component.getByText("Welcome to Pocky")).toBeInTheDocument();
	});

});