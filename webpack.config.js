const path = require('path');
const glob = require("glob");

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
    const extensions = getResolveExtensions().join(',')
    const rxjs = glob.sync(
        `rxjs/**/*.{${extensions}}`,
        {cwd: 'src'}
    ).map(file => `./${file}`)

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
                test: /\.sass$/,
                use: [
                    plugins.css.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.ts$/,
                use: 'ts-loader'
            },
            {
                test: /\.(svg|html)$/,
                use: 'raw-loader'
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
