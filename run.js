const fs = require('fs');

const generateConfig = () => {
  let config = '';
  Object.keys(process.env)
    .filter(key => key.includes('REACT_APP_'))
    .forEach((key) => {
      config += `window.${key}='${process.env[key]}';`;
    });
  config += `window.NOW='${new Date()}';`;
  fs.writeFileSync('env-config.js', config);
};

generateConfig();
