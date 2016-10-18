const path = require('path');

module.exports = {
  entry: {
    app: ['./src/main.ts'],
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
        loaders: [
          'awesome-typescript-loader',
          'angular2-template-loader',
        ],
        exclude: [/\.(spec|e2e)\.ts$/],
      },
      {
        test: /\.(html|css)/,
        loader: 'raw-loader',
      }
    ]
  },
  devServer: {
    contentBase: './dist',
  },
};
