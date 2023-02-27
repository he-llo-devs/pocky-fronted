// jest.config.js
const nextJest = require("next/jest");

const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
	// Add more setup options before each test is run
	// setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	// if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
	moduleDirectories: ["node_modules", "<rootDir>/"],
	verbose: true,

	// If you're using [Module Path Aliases](https://nextjs.org/docs/advanced-features/module-path-aliases),
	// you will have to add the moduleNameMapper in order for jest to resolve your absolute paths.
	// The paths have to be matching with the paths option within the compilerOptions in the tsconfig.json
	// For example:

	testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
	moduleNameMapper: {
		"^@/layouts(.*)$": "<rootDir>/common/components/interface/layouts/$1",
		"^@/interface(.*)$": "<rootDir>/common/components/interface/$1",
		"^@/components(.*)$": "<rootDir>/common/components/$1",
		"^@/context(.*)$": "<rootDir>/common/context/$1",
		"^@/utils(.*)$": "<rootDir>/common/utils/$1",
		"^@/hooks(.*)$": "<rootDir>/common/hooks/$1",
		"^@/common(.*)$": "<rootDir>/common/$1",
		"^@/public(.*)$": "<rootDir>/public/$1",
		"^@/modules(.*)$": "<rootDir>/modules/$1",
		"^@/pages(.*)$": "<rootDir>/pages/$1",
		"^@/styles(.*)$": "<rootDir>/styles/$1"
	},
	testEnvironment: "jest-environment-jsdom",
	setupFilesAfterEnv: ["<rootDir>/test/setup.ts"]
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
