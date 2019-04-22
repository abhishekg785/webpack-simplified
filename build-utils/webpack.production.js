const path = require('path')

const CleanPlugin = require('clean-webpack-plugin')

const root = path.resolve(__dirname, '..')

module.exports = () => ({
    plugins: [
        new CleanPlugin(),
    ]
})
