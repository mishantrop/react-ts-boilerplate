module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
    },
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/recommended',
        'plugin:unicorn/recommended',
    ],
    rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
        '@typescript-eslint/ban-types': [
            'error',
            {
                types: {
                    Function: false,
                },
            },
        ],
        'babel/camelcase': 0,
        'eslint-disable-next-line no-nested-ternary': 0,
        'comma-dangle': ['error', {
            arrays: 'only-multiline',
            objects: 'always-multiline',
            imports: 'only-multiline',
            exports: 'only-multiline',
            functions: 'only-multiline',
        }],
        complexity: ['warn', 64],
        'global-require': 0,
        'import/extensions': [
            'error',
            'ignorePackages',
                {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'line-comment-position': 0,
        'no-console': ['error', { allow: ['warn', 'error'] }],
        'no-magic-numbers': 0,
        'no-mixed-operators': [
            'error',
            {
                groups: [
                    ['+', '-', '*', '/', '%', '**'],
                    ['&', '|', '^', '~', '<<', '>>', '>>>'],
                    ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
                    ['&&', '||'],
                    ['in', 'instanceof']
                ],
                allowSamePrecedence: true,
            }
        ],
        'no-multiple-empty-lines': ['error', { max: 1 }],
        'no-trailing-spaces': 'error',
        'no-undefined': 0,
        'no-unused-vars': ['error', { ignoreRestSiblings: true }],
        'no-warning-comments': 0,
        'promise/always-return': 0,
        'promise/prefer-await-to-then': 0,
        'react/jsx-filename-extension': [
            'error',
            { extensions: ['.jsx', '.tsx'] },
        ],
        'react/jsx-no-bind': 0,
        'react/jsx-no-literals': 0,
        'react/require-default-props': 0,
        'sonarjs/max-switch-cases': 0,
        'sonarjs/no-duplicate-string': 0,
        'sonarjs/no-small-switch': 0,
        'space-before-function-paren': ['error', {
            anonymous: 'never',
            named: 'never',
            asyncArrow: 'always',
        }],
        'unicorn/filename-case': ['error', {
            cases: {
                camelCase: true,
                pascalCase: true,
                kebabCase: true,
            },
        }],
        'unicorn/prefer-query-selector': 0,
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
    },
    settings: {
        'import/extensions': [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
        ],
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                moduleDirectory: ['node_modules', 'src/'],
            },
            webpack: {
                config: './webpack.config.js',
            },
        },
        react: {
            version: 'detect',
        },
    },
    env: { browser: true },
    ignorePatterns: [
        'configs/babel.config.js',
        'configs/config.js',
        'configs/postcss.config.js',
        'configs/stylelint.config.js',
        'node_modules/**/*',
        'src/**/*.spec.js',
        'src/**/*.spec.ts',
        'stub/antifraud.min.js',
        'stub/templates/bluebird.js',
        'webpack.config.js',
    ],
}
