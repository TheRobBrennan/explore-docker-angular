// Specify the environment variables you want to use from the .env file
const env = {
  TEST: process.env.TEST,
};

module.exports = () => {
  return { code: 'module.exports = ' + JSON.stringify(env) };
};
