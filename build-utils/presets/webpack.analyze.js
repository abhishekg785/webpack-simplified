const path = require('path');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = () => ({
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: path.resolve('report/report.html'),
            openAnalyzer: false,
            generateStatsFile: true,
            statsFilename: path.resolve('report/stats.json'),
        }),
    ]
})
