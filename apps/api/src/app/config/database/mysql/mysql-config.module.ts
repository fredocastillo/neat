import { Module } from '@nestjs/common';
import { MysqlConfigService } from './mysql-config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './mysql-config';
import Joi from 'joi';

@Module({
  imports:[
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        DB_USER: Joi.string().exist(),
        DB_PASSWORD: Joi.string().exist(),
        DB_HOST: Joi.string()
          .default('localhost'),
        DB_PORT: Joi.number().default(3306),
        DB_NAME: Joi.string()
          .default('neat'),
      })
    }),
  ],
  providers: [ConfigService, MysqlConfigService],
  exports: [ConfigService, MysqlConfigService],
})
export class MysqlConfigModule {}
