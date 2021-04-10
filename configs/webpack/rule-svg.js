/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require('path')

const getRulesSVG = (config) => [
    {
        test: /\.svg$/,
        include: [
            resolve(config.PATH_SRC, 'resources/icons'),
        ],
        use: [{
            loader: 'svg-inline-loader',
            options: {
                removeTags: true,
                removingTags: ['title', 'desc'],
                removeSVGTagAttrs: false,
            },
        }],
    },
]

module.exports = {
    getRulesSVG,
}
