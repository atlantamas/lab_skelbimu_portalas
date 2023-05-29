import path from "path"

export default {
    entry: ["./src/index.mjs"],
    output: {
        filename: "webpack-bundle.mjs",
        path: path.resolve("./public/")
    },
    cache: false,
    devtool: "source-map",
    experiments:
    {
        topLevevelAwait: true
    }
}