import { Injectable } from '@nestjs/common';
import { EnvConfig } from './env-config.interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvConfigService implements EnvConfig {
  ConfigService: any;
  constructor( private configService: ConfigService) {}
  getAppPort(): number {
    //return Number( value: this.ConfigService.get<number>(propertyPath: 'PORT'))
    throw new Error('Method not implemented.');
  }
  getNodeEnv(): string {
    throw new Error('Method not implemented.');
  }
}
