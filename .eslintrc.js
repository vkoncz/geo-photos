const prettierConfig = {
    endOfLine: 'lf',
    arrowParens: 'avoid',
    trailingComma: 'all',
    printWidth: 100,
    singleQuote: true,
    tabWidth: 4,
};

const eslintConfig = {
    extends: ['universe/native', 'universe/shared/typescript-analysis'],
    rules: {
        'prettier/prettier': ['warn', prettierConfig],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx', '*.d.ts'],
            parserOptions: {
                project: './tsconfig.json',
            },
        },
    ],
};

module.exports = eslintConfig;
