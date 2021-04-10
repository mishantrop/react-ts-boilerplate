/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require('path')

const package = require('./package.json')

const PATH_PROJECT = resolve(__dirname)
const PATH_SRC = resolve(__dirname, './src')
const PATH_DIST = resolve(__dirname, './dist')
const PATH_ROOT = resolve(__dirname, './')

module.exports = {
    appName: package.name,
    PATH_DIST,
    PATH_PROJECT,
    PATH_SRC,
    PATH_ROOT,
}
