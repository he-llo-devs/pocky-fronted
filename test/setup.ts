import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import homeES from '@/public/locales/es/home.json';
import homeEN from '@/public/locales/en/home.json';

i18n.use(initReactI18next).init({
	lng: "es",
	resources: {
		en: {
			home: homeEN,
		},
		es: {
			home: homeES,
		}
	},
	fallbackLng: "es",
	debug: false,
});

export default i18n;