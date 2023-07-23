import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './config/app/app-config.module';
import { MysqlConfigModule } from './config/database/mysql/mysql-config.module';

@Module({
  imports: [AppConfigModule, MysqlConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
