const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const jsonImporter = require('node-sass-json-importer')
const path = require('path')
const autoprefixer = require('autoprefixer')

const globEntries = require('./lib/utils/node/webpack-glob-entries')

const entries = [
  'babel-polyfill',
  './index.jsx',
  './lib/styles/scss/main.scss',
].concat(
  Object.values(globEntries('./lib/styles/fonts/**/*.*'))
)

module.exports = {
  entry: entries,
  devServer: {
    port: 7000,
    host: 'localhost',
    historyApiFallback: true,
  },
  output: {
    filename: 'public/bundle.js',
    path: __dirname,
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoader: 2,
                camelCase: true,
                localIdentName: '[local]',
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [autoprefixer()],
              },
            },
            {
              loader: 'sass-loader',
              options: {
                importer: jsonImporter,
              },
            },
          ],
        }),
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        include: __dirname,
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'public/[name].[ext]',
        },
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json-loader',
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('public/bundle.css'),
  ],
  resolve: {
    alias: {
      components: 'lib/components',
      theme: 'lib/theme',
      styles: 'lib/styles',
      utils: 'lib/utils',
      app: 'app',
      views: 'views',
    },
    extensions: ['.js', '.jsx', '.json'],
    modules: [path.join(__dirname, './'), 'node_modules'],
  },
  devtool: 'source-map',
}
