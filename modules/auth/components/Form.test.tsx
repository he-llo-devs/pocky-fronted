import '@testing-library/jest-dom/extend-expect';
import { cleanup, render, renderHook } from '@testing-library/react';
import { I18nextProvider, useTranslation} from 'react-i18next';
import { act } from 'react-dom/test-utils';

//Types
import { RenderResult } from '@testing-library/react';
import { I18n } from 'next-i18next';

import Form from './Form';

describe("Login form", (): void => {
	let FormComponent: RenderResult;
	let i18n: I18n;

	beforeEach(() => {
		const { result } = renderHook(() => useTranslation());
		i18n = result.current.i18n;

		FormComponent = render(
			<I18nextProvider i18n={i18n}>
				<Form/>
			</I18nextProvider>
		);
	});

	afterEach(() => {
		cleanup();
	});

	it("renders page", (): void => {
		const h1 = FormComponent.getAllByRole('heading');
		expect(h1).toBeTruthy();
	});
});