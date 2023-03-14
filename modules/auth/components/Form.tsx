import { useTranslation } from "next-i18next";

const Form = () => {
	const { t } = useTranslation("");

	return (
		<>
			<div className="bg-white rounded-b-2xl lg:rounded-b-none lg:rounded-r-2xl lg:-mr-5 z-10 w-full">
				<h2>{t("welcome", { ns: "login" })}</h2>
				<h1>{t("title", { ns: "login" })}</h1>
			</div>
			<div className="w-full bg-gray-200">
				<span>Side img</span>
			</div>
		</>
	);
};
 
export default Form;