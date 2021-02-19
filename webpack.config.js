const path = require('path')

module.exports = {
   entry: './src/index.js', 
    mode: 'development',
    output: {
      path: __dirname, 
      filename: './public/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, 'src'),
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

// module.exports = {
//   entry: './src/index.js', 
//   mode: 'development',
//   output: {
//     path: __dirname, 
//     filename: './public/bundle.js'
//   },
//   devtool: 'source-map',
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader'
//         }
//       },
//       {
//         test: /\.css$/,
//         use: [
//           'style-loader',
//           'css-loader',
//         ]
//       }
//     ]
//   }
// }