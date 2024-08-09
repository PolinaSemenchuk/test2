const path = require('path');

module.exports = {
  entry: './src/index.js', // Путь к вашему входному файлу
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Папка для выходного файла
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Обрабатываем файлы .js и .jsx
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/, // Обрабатываем файлы .css
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Поддержка .js и .jsx файлов
  },
  mode: 'development', // Используем режим разработки
};
