module.exports = function override(config, env) {
    // do stuff with the webpack config...
    return config;
};
const { override, addWebpackPlugin } = require('customize-cra');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

module.exports = override(addWebpackPlugin(new AntdDayjsWebpackPlugin()));