/* eslint-disable @typescript-eslint/no-var-requires, import/no-extraneous-dependencies */
const {
    resolve
} = require('path')
const webpack = require('webpack')

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')

const config = require('./path.config.js')
const { getRuleCSS } = require('./configs/webpack/rule-css')
const { getRulesFile } = require('./configs/webpack/rule-file')
const { getRulesSVG } = require('./configs/webpack/rule-svg')

module.exports = (env, argv) => {
    const isAnalyze = !!argv.analyze
    const isDev = argv.mode === 'development'
    const port = argv.port || 8080
    const smp = new SpeedMeasurePlugin()

    const webpackConfig = {
        devtool: isDev ? 'source-map' : false,

        entry: [
            'react-hot-loader/patch',
            resolve(config.PATH_SRC, 'index.tsx'),
        ],

        output: {
            filename: isDev ? 'index.[hash].js' : 'index.js',
            chunkFilename: isDev ? '[id].js' : '[name].js',
            path: config.PATH_DIST,
        },

        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            alias: {
                ...(isDev ? {
                    'react-dom': '@hot-loader/react-dom'
                } : {}),
                '@app': config.PATH_SRC,
                'app': config.PATH_SRC,
                '@root': config.PATH_ROOT,
                'root': config.PATH_ROOT,
            },
        },

        module: {
            rules: [{
                    test: /\.(jsx|tsx|ts|js)$/,
                    include: [
                        config.PATH_SRC,
                        /node_modules[\\/]react-router/,
                    ],
                    use: {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                        },
                    },
                },
                getRuleCSS(config, isDev, argv.mode),
                ...getRulesFile(isDev),
                ...getRulesSVG(config),
            ],
        },

        plugins: [
            new ESLintPlugin({
                extensions: ['js', 'ts', 'jsx', 'tsx'],
                context: 'src',
                lintDirtyModulesOnly: true,
                threads: 3,
            }),
            new ForkTsCheckerWebpackPlugin({
                typescript: {
                    mode: 'write-references',
                    memoryLimit: 5000,
                }
            }),
            new CleanWebpackPlugin({}),
            ...(isDev ?
                [new HtmlWebpackPlugin({
                    template: resolve(config.PATH_PROJECT, 'index.html'),
                })] :
                [new CompressionPlugin()]
            ),
            ...(isAnalyze ? [new BundleAnalyzerPlugin()] : []),
        ],

        optimization: {
            splitChunks: {
                cacheGroups: {
                    'vendors-2': {
                        test: /[\\/]node_modules[\\/](react|react-dom|react-loadable|axios|history|classnames|qs)[\\/]/,
                        chunks: 'all',
                        name: 'vendors-2',
                        enforce: true,
                        priority: -25,
                    },
                    'vendors-3': {
                        test: /[\\/]node_modules[\\/]/,
                        chunks: 'all',
                        name: 'vendors-3',
                        enforce: true,
                        priority: -30,
                    },
                    commons: {
                        chunks: 'all',
                        minChunks: 2,
                        priority: -40,
                    },
                },
            },
            minimize: !isDev,
            minimizer: [
                new TerserPlugin(isDev ?
                    {
                        cache: true,
                        parallel: true,
                        sourceMap: true,
                    } :
                    {
                        terserOptions: {
                            compress: {
                                pure_funcs: [
                                    'console.info',
                                    'console.debug',
                                    'console.warn',
                                ],
                            },
                        },
                    },
                ),
                new OptimizeCSSAssetsPlugin({}),
            ],
        },

        devServer: {
            port,
            host: 'localhost',
            hot: true,
            compress: false,
            contentBase: config.PATH_DIST,
            historyApiFallback: true,
            open: true,
        },
    }

    return isDev ? smp.wrap(webpackConfig) : webpackConfig
}