const webpack = require('webpack')
const webpackMerge = require('webpack-merge')

const loadPresets = require('./build-utils/loadPresets');

const modeConfig = mode => require(`./build-utils/webpack.${mode}`)();

module.exports = ({ mode, presets } = { mode: "production", presets: []}) => {
    const config = {
        mode,
        output: {
            filename: "[name].js"
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                }
            ]
        },
        plugins: [
            new webpack.ProgressPlugin(),
        ]
    }

    return webpackMerge(
        config,
        modeConfig(mode),
        loadPresets({ mode, presets })
    );
}
