const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
    // do stuff with the webpack config...
    config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);  // change importing css to less
    config = rewireLess(config, env, {
        modifyVars: { "@primary-color": "#108EE9" },
    });
    return config;
  };