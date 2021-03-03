const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimizer: [
            new TerserPlugin()
        ]
    },
    performance: {
        maxEntrypointSize: 500000,
        maxAssetSize: 500000
    },
    output: {
        filename: 'rtftohtml.min.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'RtfToHtml',
        libraryTarget: 'umd',
        libraryExport: "default",
        publicPath: ''
    },
});
