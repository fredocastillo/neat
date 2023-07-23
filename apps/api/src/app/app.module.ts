import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './config/app/app-config.module';
import { MysqlConfigModule } from './config/database/mysql/mysql-config.module';
import { MysqlProviderModule } from './providers/database/mysql/mysql-provider.module';

@Module({
  imports: [AppConfigModule, MysqlConfigModule, MysqlProviderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
