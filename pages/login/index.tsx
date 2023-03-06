import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale as string, ["common", "login"])),
		},
	};
};

const Login = () => {
	const { t } = useTranslation("");

	return (
		<>
			<Head>
				<title>{t("title", { ns: "common" })}</title>
				<meta name="description" content="Pocky: Finanzas personales" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
		    	<h1>Desde login</h1>
			</main>
		</>
	);
};
 
export default Login;