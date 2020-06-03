module.exports = {
    configureWebpack: {
        output: {
            filename: '[name].js',
            publicPath: '/webpack/'
        },
        module: {
            loaders: [
                { test: /\.css$/, loader: 'style!css?sourceMap' },
                { test: /\.scss$/, loaders: ['style', 'css?sourceMap', 'sass'] },
                { test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/, loader: 'url' },
                {
                    test: /\.js$/,
                    exclude: /(node_modules)/,
                    loader: 'babel',
                    query: {
                        presets: ['es2015', 'stage-2']
                    }
                }
            ]
        },
    }
}