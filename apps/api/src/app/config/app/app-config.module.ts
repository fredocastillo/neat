import { Module } from '@nestjs/common';
import { AppConfigService } from './app-config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './app-config';
import Joi from 'joi';

@Module({
  imports:[
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        APP_ENV: Joi.string()
          .valid('development', 'staging', 'production')
          .default('development'),
        APP_PORT: Joi.number().default(3000),
      })
    }),
  ],
  providers: [ConfigService, AppConfigService],
  exports: [ConfigService, AppConfigService],
})
export class AppConfigModule {}
