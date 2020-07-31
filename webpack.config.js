const path = require("path");
const fs = require("fs");

const WebpackBundleAnalizer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const argv = process.argv;

const mode = argv.find((arg, i) => {
    const prev = argv[i - 1];

    if( prev !== "--mode" ) return false;

    return arg;
});

// delete build dir
fs.rmdirSync(path.join(__dirname, "./build"), { recursive: true });

const isProduction = mode === "production" ? true : false;
const isAnalyze = argv.find(arg => arg === "--analyze") ? true : false;

const getPlugins = () => {
    const plugins = [
        new HtmlWebpackPlugin({ 
            template: path.join(__dirname, "./public/index.html"),
            favicon: path.join(__dirname, "./public/logo.ico"),
            minify: isProduction,
        })
    ];

    if( isAnalyze ) {
        plugins.push(new WebpackBundleAnalizer());
    }

    return plugins;
}

module.exports = {
    mode,
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "[contenthash].js",
        chunkFilename: "[contenthash].bundle.js"
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
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
                test: [/\.ts$/, /.tsx$/],
                exclude: /node_modules/,
                use: "ts-loader"
            },
            {
                test: /.css$/,
                loaders: ["style-loader", "css-loader"]
            },
            {
                test: /.svg$/,
                loaders: ["@svgr/webpack", "file-loader"]
            },
            {
                test: /.(jpe?g|png|gif)$/i,
                loader: "file-loader",
                options: {
                    name: "assests/[name].[ext]"
                }
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        compress: true,
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