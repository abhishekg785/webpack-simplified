const webpackMerge = require('webpack-merge')

const modeConfig = mode => require(`./build-utils/webpack.${mode}`)();

module.exports = ({ mode, presets } = { mode: "production", presets: []}) => {
    const config = {
        mode,
        output: {
            filename: "[name].js"
        }
    }

    return webpackMerge(
        config,
        modeConfig(mode)
    );
}
