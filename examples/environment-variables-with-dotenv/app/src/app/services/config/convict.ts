import * as loadedConvict from '!val-loader!./convict-loader';

export interface IConvict {
  /* We anticipate our NODE_ENV will have this specific set of values */
  ENV: 'production' | 'development' | 'test' | 'local' | 'stage';
  /* These environment variables will all be strings supplied by the user */
  API: string;
  TEST: string;
}

export const convict = loadedConvict as IConvict;
