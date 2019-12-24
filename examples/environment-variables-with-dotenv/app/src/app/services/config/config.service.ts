import { convict } from './convict';

export class ConfigService {
  private config = convict;

  constructor() {}

  public getConfig() {
    return this.config;
  }
}
