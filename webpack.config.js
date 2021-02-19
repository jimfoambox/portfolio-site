module.exports = {
  entry: './src/index.js', 
  mode: 'development',
  output: {
    path: __dirname, 
    filename: './public/bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                "targets": "defaults" 
              }],
              '@babel/preset-react'
            ]
          }
      }]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      }
    ]
  }
}