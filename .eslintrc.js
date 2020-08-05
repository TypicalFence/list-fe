module.exports = {
    env: {
        browser: true,
        node: true
    },
    extends: [
        "standard",
        "plugin:import/errors",
        "plugin:import/warnings"

    ],
    rules: {
        indent: [2, 4, { SwitchCase: 1 }],
        quotes: [2, "double"],
        semi: ["error", "always"],
        "space-before-function-paren": ["error", "never"]
    },
    plugins: [
        "import",
        "prefer-arrow",
        "jsdoc"
    ],
    overrides: [
        {
            files: ["*.ts"],
            extends: [
                "standard",
                "plugin:import/errors",
                "plugin:import/warnings",
                "plugin:import/typescript",
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended",
                "plugin:@typescript-eslint/recommended-requiring-type-checking"

            ],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                ecmaVersion: 10,
                project: [
                    "tsconfig.lint.json"
                ],
                sourceType: "module",
                ecmaFeatures: {
                    modules: true
                }
            },
            plugins: [
                "@typescript-eslint",
                "@angular-eslint/eslint-plugin",
                "import",
                "prefer-arrow",
                "jsdoc"
            ],
            rules: {
                "@typescript-eslint/no-unsafe-call": 0,
                "@typescript-eslint/no-unsafe-member-access": 0,
                indent: [2, 4, { SwitchCase: 1 }],
                quotes: [2, "double"],
                semi: ["error", "always"],
                "space-before-function-paren": ["error", "never"]
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
