module.exports = {
    mode: "development",
    entry: "./ts/index.ts",
    output: {
        filename: "bundle.js",
        path: __dirname + "/build"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: [
            ".ts", ".js"
        ]
    }
}