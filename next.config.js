// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars, @typescript-eslint/no-var-requires
const { i18n } = require("./next-i18next.config");
/** @type {import('next').NextConfig} */
module.exports = {
    i18n: {
        defaultLocale: "en",
        locales: ["en", "fr"],
    },
};
