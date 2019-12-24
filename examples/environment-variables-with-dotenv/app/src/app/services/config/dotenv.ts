import * as loadedDotenv from '!val-loader!./dotenv-loader';

export interface IDotenv {
  TEST: string;
}

export const dotenv = loadedDotenv as IDotenv;
