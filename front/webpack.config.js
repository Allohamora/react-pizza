const path = require("path");

// analyzer
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
// ts baseURL
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
// binding with index.html
const HtmlWebpackPlugin = require("html-webpack-plugin");
// optimization (minify+)
const TerserPlugin = require("terser-webpack-plugin");
// cleans build dir.
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const { argv } = process;
// get --mode param
const mode = argv.find((arg, i) => {
    const prev = argv[i - 1];

    if( prev !== "--mode" ) return false;

    return arg;
});

const isProduction = mode === "production" ? true : false;
const isAnalyze = argv.find(arg => arg === "--analyze") ? true : false;

const getPlugins = () => {
    const plugins = [
        new HtmlWebpackPlugin({ 
            template: path.join(__dirname, "./public/index.html"),
            favicon: path.join(__dirname, "./public/logo.ico"),
            minify: isProduction,
        }),
        new CleanWebpackPlugin()
    ];

    if( isAnalyze ) {
        plugins.push(new BundleAnalyzerPlugin());
    }

    return plugins;
}

const fileLoader = {
    loader: "file-loader",
    options: {
        name: isProduction ? "assets/[contenthash:8].[ext]" : "assets/[name].[ext]"
    }
};

module.exports = {
    mode,
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: isProduction ? "[contenthash:8].js" : "[name].js",
        chunkFilename: isProduction ? "[contenthash:8].chunk.js" : "[name].chunk.js"
    },

    // if production => delete source map, if development => save sourcemap
    devtool: isProduction ? false : "inline-source-map",

    // increase max size to 512kb
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    optimization: {
        minimize: isProduction,
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: !isProduction,
            })
        ],
    },
    module: {
        rules: [
            {
                test: [/\.js$/, /\.jsx$/],
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: [/\.ts$/, /\.tsx$/],
                exclude: [/node_modules/, /__test__/],
                use: "ts-loader"
            },
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader"]
            },
            {
                test: /\.svg$/,
                use: ["@svgr/webpack", fileLoader]
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                ...fileLoader
            }
        ]
    },
    devServer: {
        // if 404 redirect to index.html
        historyApiFallback: true,

        // gzip compress
        compress: true,

        // enables webpack hot
        hot: true,

        // overlay in browser
        overlay: true,

        // stats to console
        stats: "minimal",
    },
    resolve: {
        plugins: [
            // for valid ts baseUrl
            new TsconfigPathsPlugin({ configFile: "./tsconfig.json" }),
        ],
        extensions: [ ".tsx", ".ts", ".jsx", ".js" ]
    },
    plugins: getPlugins(),
}