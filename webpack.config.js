module.exports = {
    mode: "development",
    entry: "./src/ts/main.ts",
    output: {
        filename: "bundle.js",
        path: __dirname + "/src/build"
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