import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";

import { appWithTranslation } from 'next-i18next';

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function App({ Component, pageProps }: AppProps) {
	return(
		<>
			<Head>
				<meta charSet="UTF-8"/>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<title>Pocky</title>

				<link rel="shortcut icon" href="/favicon.png" />
			</Head>
			<>
				<Component {...pageProps}/>
			</>
		</>
	);
}

export default appWithTranslation(App);