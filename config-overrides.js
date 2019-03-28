const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const path = require('path');
const fs = require('fs');
const lessToJs = require('less-vars-to-js');
const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, './src/themes/antd-overrides.less'), 'utf8'));

module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', {
    libraryName: 'antd',
    style: true,
  }], config);

  config = rewireLess.withLoaderOptions({
    javascriptEnabled: true,
    modifyVars: themeVariables,
  })(config, env);

  return config;
};
