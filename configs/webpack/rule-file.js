const getRulesFile = (isDev) => [
    {
        test: /\.(png|jpe?g|gif)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: isDev
                        ? 'images/[path][name][hash:5].[ext]'
                        : 'images/[hash:base64].[ext]',
                },
            },
        ],
    },
    {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: isDev
                        ? 'fonts/[path][name][hash:5].[ext]'
                        : 'fonts/[hash:base64].[ext]',
                },
            },
        ],
    },
]

module.exports = {
    getRulesFile,
}
