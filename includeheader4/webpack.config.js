const path = require('path');
//const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const devMode = process.env.NODE_ENV !== 'production';
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');

ScssExtract = MiniCssExtractPlugin;


module.exports = {
  entry: {
    app: './src/js/index.js',

  },
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      favicon: 'src/images/favicon16x16.png',
      filename: 'index.html',
      template: 'src/index.html'
    }),
    //new HtmlWebpackPlugin(),
    new ScssExtract({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "css/[name].bundle.css",
      chunkFilename: "css/[name].bundle.css"
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/HEADER.shtml'),
          to: path.resolve(__dirname, 'dist/HEADER.shtml'),
          toType: 'file'
        },
        {
          from: path.resolve(__dirname, 'src/head.shtml'),
          to: path.resolve(__dirname, 'dist/head.shtml'),
          toType: 'file'
        },
        {
          from: path.resolve(__dirname, 'src/FOOTER.shtml'),
          to: path.resolve(__dirname, 'dist/FOOTER.shtml'),
          toType: 'file'
        },
        {
          from: path.resolve(__dirname, 'src/404.shtml'),
          to: path.resolve(__dirname, 'dist/404.shtml'),
          toType: 'file'
        },
        {
          from: path.resolve(__dirname, 'src/500.shtml'),
          to: path.resolve(__dirname, 'dist/500.shtml'),
          toType: 'file'
        }
      ],
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          ScssExtract.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
      },
      {
        test: /\g.css$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'css/[name].[ext]'
            }
          }
        ],
        include: path.resolve(__dirname, "node_modules/purecss/build")
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]'
          }
        }
        ],
        include: path.resolve(__dirname, "src/images"),
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'icons/[name].[ext]'
          }
        }
        ],
        include: path.resolve(__dirname, "src/icons"),
      },
    ]
  },
  output: {
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/includeheader4'

  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        exclude: /\/node_modules/,
      }),
    ],
  },
  devtool: 'source-map',
  watch: true,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    contentBasePublicPath: '/',
    // publicPath: "/",
    // contentBase: "./",
    hot: true,
    compress: true,
    port: 4080
  }
};
