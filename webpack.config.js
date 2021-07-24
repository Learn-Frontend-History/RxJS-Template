const path = require('path');
const dir = (__path) => path.resolve(__dirname, __path);

const plugins = {
    html: require('html-webpack-plugin'),
    css: require('mini-css-extract-plugin'),
};

module.exports = {
    mode: 'development',
    context: dir('src'),
    entry: ['./htmlLog/index.js', './index.ts'],
    output: {
        path: dir('dist'),
        filename: '[name].js',
        clean: true
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    plugins: [
        new plugins.html({template: 'index.html'}),
        new plugins.css()
    ],
    devServer: {
        port: 4200
    },
    module: {
        rules: [
            {
                test: /.css$/,
                use: [plugins.css.loader, 'css-loader']
            },
            {
                test: /.ts$/,
                use: 'ts-loader'
            }
        ]
    },
    devtool: "source-map",
};
