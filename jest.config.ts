module.exports = {
    testEnvironment: "node",
    preset: "ts-jest",
    coverageDirectory: "coverage",
    testPathIgnorePatterns: [
        "<rootDir>/src/",
        "<rootDir>/node_modules/",
        "<rootDir>/public/",
        "<rootDir>/prisma/",
        "<rootDir>/.husky/",
        "<rootDir>/.next/",
        "<rootDir>/.git/",
    ],
    // Will check for .spec.ts .spec.tsx exclusively inside the __tests__ in the root directory
    testRegex: "__tests__/.*\\.spec\\.[jt]sx?$",
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
};
