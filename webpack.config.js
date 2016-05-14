var path = require('path');

module.exports = {

    entry: './src/bootstrap.ts',

    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    resolve: {
        root: path.resolve('./src'),
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'],
        alias: {
            decorators: path.resolve(__dirname, 'src', 'decorators', 'index.ts')
        }
    },

    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' },
            { test: /\.less$/, loader: "style!css!less" }
        ]
    }

}