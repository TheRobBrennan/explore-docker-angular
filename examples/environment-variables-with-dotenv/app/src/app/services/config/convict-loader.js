const convict = require('convict');
const dotenv = require('dotenv');

dotenv.config();

const config = convict({
  /* Convict allows us to do things like declare inline configuration parameters, default config JSON files, and the environment variables at runtime */

  /* NOTE: env refers to an environment variable if it exists; otherwise it can default to a specified value */
  ENV: {
    doc: 'The applicaton environment.',
    format: ['production', 'development', 'test', 'local', 'stage'],
    default: 'local',
    env: 'NODE_ENV',
  },
  API: {
    doc: 'The applicaton api.',
    format: String,
    default: 'localhost',
    env: 'API',
  },
  TEST: {
    doc: 'Test environment variable',
    format: String,
    default: '',
    env: 'TEST',
  }
});

// Perform validation
config.validate({ allowed: 'strict' });

module.exports = () => {
  return { code: 'module.exports = ' + JSON.stringify(config.getProperties()) };
};
