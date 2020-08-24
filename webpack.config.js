const path = require("path")
const webpack = require("webpack")
module.exports = {
    entry: './scr/client/index.js',
}
module: {
    rules: [
            {
        test: '/\.js$/',
        exclude: /node_modules/,
        loader: "babel-loader"
            }
    ]
}