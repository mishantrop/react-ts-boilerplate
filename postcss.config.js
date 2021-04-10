module.exports = (ctx) => ({
    parser: ctx.parser ? 'sugarss' : false,
    map: ctx.options.env === 'development' ? ctx.map : false,
    plugins: {
        'postcss-import': {},
        precss: {},
        'postcss-for': {},
        'postcss-simple-vars': {},
        'postcss-custom-properties': { preserve: false },
        'postcss-nested': { preserve: false },
        'postcss-color-function': {},
        cssnano: ctx.options.env === 'production' ? {} : false,
    },
})
