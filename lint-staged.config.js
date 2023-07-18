module.exports = {
    // This will check TypeScript files
    "**/*.(ts|tsx)": () => "npx tsc --noEmit",

    // This will lint and format TypeScript and JavaScript files
    "**/*.(ts|tsx|js)": filenames => [
        `npx eslint --fix ${filenames.join(" ")}`,
        `npx prettier --write ${filenames.join(" ")}`,
    ],

    // This will format Markdown and JSON files
    "**/*.(md|json)": filenames =>
        `npx prettier --write ${filenames.join(" ")}`,
};
