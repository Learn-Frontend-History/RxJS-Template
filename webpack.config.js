const fs = require('fs')
const path = require('path');

const dir = (__path) => path.resolve(__dirname, __path);

const plugins = {
    copy: require('copy-webpack-plugin'),
    html: require('html-webpack-plugin'),
    css: require('mini-css-extract-plugin'),
};

function getResolveExtensions() {
    return ['ts', 'js']
}
function getRxJSEntry() {
    const extensions = getResolveExtensions().join('|')
    const rxjs = fs.readdirSync(
        'src/rxjs'
    ).filter(
        file => new RegExp(`.(${extensions})$`).test(file)
    ).map(file => `./rxjs/${file}`)

    return rxjs.length ? { rxjs } : {}
}

module.exports = {
    mode: 'development',
    context: dir('src'),
    entry: {
        main: './index.ts',
        ...getRxJSEntry()
    },
    output: {
        path: dir('dist'),
        filename: '[name].js',
        clean: true
    },
    resolve: {
        extensions: getResolveExtensions().map(ext => `.${ext}`),
        alias: {
            '@': path.resolve(__dirname, 'src/common/'),
        }
    },
    plugins: [
        new plugins.html({template: 'index.html'}),
        new plugins.css(),
        new plugins.copy({
            patterns: [{
                from: 'favicon.ico'
            }]
        })
    ],
    devServer: {
        port: 4201
    },
    module: {
        rules: [
            {
                test: /.css$/,
                use: [plugins.css.loader, 'css-loader']
            },
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 0
        },
    },
    devtool: "source-map",
};
