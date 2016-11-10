module.exports = {
    entry: './src/index.js',
    output: {
        path: './',
        filename: 'index.js'
    },
    devServer: {
        inline: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    }
};
