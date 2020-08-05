const jsRules = {
    indent: [2, 4, { SwitchCase: 1 }],
    quotes: [2, "double"],
    semi: ["error", "always"],
    "space-before-function-paren": ["error", "never"]
};

const tsRules = {
    ...jsRules
};

const jsExtends = [
    "standard",
    "plugin:import/errors",
    "plugin:import/warnings"
];

const tsExtends = [
    ...jsExtends,
    "plugin:import/typescript",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
];

const jsPlugins = [
    "import",
    "prefer-arrow",
    "jsdoc"
];

const tsPlugins = [
    ...jsPlugins,
    "@typescript-eslint",
    "@angular-eslint/eslint-plugin"
];

const tsParserOptions = {
    ecmaVersion: 10,
    project: [
        "tsconfig.lint.json"
    ],
    sourceType: "module",
    ecmaFeatures: {
        modules: true
    }
};

module.exports = {
    env: {
        browser: true,
        node: true
    },
    overrides: [
        {
            files: ["*.js"],
            extends: jsExtends,
            plugins: jsPlugins,
            rules: jsRules
        },
        {
            files: ["*.ts"],
            extends: tsExtends,
            parser: "@typescript-eslint/parser",
            parserOptions: tsParserOptions,
            plugins: tsPlugins,
            rules: tsRules
        },
        {
            files: ["*.spec.ts"],
            extends: tsExtends,
            parser: "@typescript-eslint/parser",
            parserOptions: tsParserOptions,
            plugins: tsPlugins,
            rules: {
                ...tsRules,
                "@typescript-eslint/no-unsafe-call": "off",
                "@typescript-eslint/no-unsafe-member-access": "off",
                "@typescript-eslint/no-unsafe-assignment": "off",
                "@typescript-eslint/no-floating-promises": "off"
            }
        },
        {
            files: ["*.component.html"],
            parser: "@angular-eslint/template-parser",
            plugins: ["@angular-eslint/template"],
            rules: {
                "@angular-eslint/template/banana-in-a-box": "error",
                "@angular-eslint/template/no-negated-async": "error"

            }
        }

    ]
};
