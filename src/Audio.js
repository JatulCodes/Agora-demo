const path = require("path");

module.exports = {
    entry: "./VoiceCall",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist"),
    },
    devServer: {
        compress: true,
    },
};
