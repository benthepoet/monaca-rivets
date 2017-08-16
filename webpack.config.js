const { resolve } = require('path');

module.exports = {
    entry: './src/index.js',
        output: {
            path: resolve(__dirname, 'www'),
            filename: 'bundle.js'
        },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?\S*)?$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/[name].[hash].[ext]'
                }
            }
        ]
    },
    devServer: {
        contentBase: resolve(__dirname, 'www'),
        disableHostCheck: true
    }
};