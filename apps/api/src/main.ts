/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { AppConfigService } from './app/config/app/app-config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const appConfig: AppConfigService = app.get(AppConfigService);
  const port = appConfig.port;
  const env = appConfig.env;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running ${env} on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
