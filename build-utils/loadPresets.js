const webpackMerge = require('webpack-merge')

module.exports = (env = { presets: [] }) => {
    const presets = env.presets || []

    const finalPresets = [].concat(...[presets])
    const presetConfigs = finalPresets.map(preset => require(`./presets/webpack.${preset}`)(env))

    return webpackMerge({}, ...presetConfigs)
}
