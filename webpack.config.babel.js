import pkg from "./package.json"
import path from "path"
import webpack from "webpack"

const src = path.join(__dirname, "src")

export default {

  entry: [
    "react-hot-loader/patch",
    "./src/index.js",
    "./src/index.html"
  ],

  devtool: "cheap-module-eval-source-map",

  resolve: {

    extensions: [
      ".js",
      ".less",
      ".css",
      ".svg"
    ],

    modules: [
      path.resolve("./src/components"),
      path.resolve("./src/styles"),
      path.resolve("./src/icons"),
      path.resolve("./src/etc"),
      path.resolve("./src"),
      "node_modules"
    ]

  },

  module: {

    rules: [

      {
        test: /\.html?$/,
        include: src,
        use: [{
          loader: "file-loader",
          options: {
            name: "[name].html"
          }
        }]
      },

      {
        test: /\.js$/,
        include: src,
        use: "babel-loader"
      },

      {
        test: /\.less$/,
        include: src,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: () => {
                return [
                  require("autoprefixer")
                ]
              }
            }
          },
          "less-loader"
        ]
      },

      {
        test: /\.svg$/,
        include: src,
        use: [
          "babel-loader",
          {
            loader: "react-svg-loader",
            options: {
              jsx: true
            }
          }
        ]
      }

    ],

  },

  output: {
    path: path.join(__dirname, "build"),
    publicPath: "http://localhost:3000/",
    filename: `${pkg.name}.js`
  }

}
