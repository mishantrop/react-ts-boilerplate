const getRuleCSS = (config, isDev, mode) => ({
    test: /\.css$/,
    include: [config.PATH_SRC],
    use: [
        {
            loader: 'style-loader',
        }, {
            loader: 'css-loader',
            options: {
                localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64]',
                modules: true,
                camelCase: true,
                importLoaders: 1,
            },
        }, {
            loader: 'postcss-loader',
            options: {
                config: {
                    ctx: {
                        env: mode,
                    },
                },
            },
        },
    ],
})

module.exports = {
    getRuleCSS,
}
