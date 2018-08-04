const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production';
const CopyWebpackPlugin = require('copy-webpack-plugin')


ScssExtract = MiniCssExtractPlugin;
//const Purecss = MiniCssExtractPlugin;
//const Styles= MiniCssExtractPlugin;

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
   

    new CopyWebpackPlugin([{
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
    },
  ])
  ],
  module: {
    rules: [
      {
        //test: /\.(sa|sc|c)ss$/,
        test: /\.scss$/,
        use: [
          //devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          ScssExtract.loader,          
          'css-loader',
          //{ loader: 'css-loader', options: { importLoaders: 1 } },
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
        //exclude:path.resolve(__dirname, "node_modules") node_modules/purecss/build$
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
          //  'file-loader'
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
          //  'file-loader'
      ],
      include: path.resolve(__dirname, "src/icons"),
      },
    ]
  },
  output: {
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[name].bundle.js',
    //filename: 'bundle.js',
    //chunkFilename: 'js/bundle.js',
    //filename: 'js/[name]',
    //chunkFilename: 'js/[name]',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/includeheader4'

  }
};
