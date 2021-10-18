const path = require("path");

module.exports = {
  stories: ["../stories/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: (config) => {
    config.module.rules.push(
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../"),
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loaders: ['file-loader'],
        include: path.resolve(__dirname, '../')
      }
    );

    return config;
  },
};
