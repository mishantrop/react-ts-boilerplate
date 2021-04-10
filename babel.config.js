const presets = [
    [
        '@babel/env',
        {
            corejs: 3,
            modules: false,
            useBuiltIns: 'usage',
        },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
]

const plugins = [
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-react-jsx-source',
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-export-namespace-from'],
]

module.exports = { presets, plugins }
