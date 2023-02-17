import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale as string, ["common", "home"])),
		},
	};
};

const Home = () => {
	const { t } = useTranslation("");

	return (
		<>
			<Head>
				<title>Pocky: Finanzas personales</title>
				<meta name="description" content="Pocky: Finanzas personales" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<div>
					<h1>{t("welcome", { ns: 'home' })}</h1>
				</div>
			</main>
		</>
	);
};

export default Home;

