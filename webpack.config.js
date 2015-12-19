module.exports = {
    entry: {
        app: "./app/app.js"
    },
    output: {
        path: './dist',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    module: {
        loaders: [
            { test: /\.js$/,   loader: "babel" },
            { test: /\.jsx$/,   loader: "babel" },
            { test: /\.json$/,   loader: "babel" },
            { test: /\.coffee$/, loader: "coffee" },
            { test: /\.css$/,    loader: "style!css" },
            { test: /\.scss$/,   loader: "style!css!sass" },
            { test: /\.jade$/,   loader: "jade?self" },
            { test: /\.png$/,    loader: "url?prefix=img/&limit=5000" },
            { test: /\.jpg$/,    loader: "url?prefix=img/&limit=5000" },
            { test: /\.gif$/,    loader: "url?prefix=img/&limit=5000" },
            { test: /\.eot$/,    loader: "file?prefix=font/" },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url?limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file" }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            "app": __dirname + "/app",
            "components": __dirname + "/app/components",
            "pages": __dirname + "/app/pages"
        }
    }
};