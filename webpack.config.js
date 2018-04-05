var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './app/index.js',
    watch: true,
    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};