const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname,
  cache: true,
  entry: {
    'main': `${__dirname}/src/index.js`
  },
  output: {
    path: `${__dirname}`,
    filename: `dist/[name].bundle.js`,
    sourceMapFilename: '[file].map'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: `${__dirname}/src`,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          plugins: ['transform-decorators-legacy'],
          presets: ['react', 'es2015', 'es2017', 'stage-1']
        }
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        loader: 'style-loader!raw-loader!postcss-loader!sass-loader'
      }
    ]
  },
  resolve: {
    alias: {
      main: `${__dirname}/src`,
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/template.js`,
      inject: false,
      filename: 'dist/index.html',
      chunks: ['main']
    })
  ],
  devtool: 'source-map'
}