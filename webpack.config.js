const path = require('path');

module.exports = {
  entry: {
    app: ['./app/main.ts'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/lib'),
    publicPath: '/scripts/',
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    loaders: [
      {
        test: /\.tsx?/,
        loader: 'ts-loader',
      },
    ]
  },
  devServer: {
    contentBase: './dist',
  },
};
