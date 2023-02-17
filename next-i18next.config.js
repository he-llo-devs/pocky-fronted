const path = require("path");

const i18n = {
	defaultLocale: "es",
	locales: ["en", "es"],
	localeDetection: false,
};

const nexti18nextConfig = {
	i18n: {
		...i18n,
		localePath: path.resolve("./public/locales"),
	},
};

exports.i18n = i18n;
exports.nexti18nextConfig = nexti18nextConfig;
