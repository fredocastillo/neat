import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './config/app/app-config.module';
import { MysqlConfigModule } from './config/database/mysql/mysql-config.module';
import { MysqlProviderModule } from './providers/database/mysql/mysql-provider.module';
import { UserModule } from './models/user/user.module';
import { BlindModule } from './models/blind/blind.module';
import { UserBlindModule } from './models/user-blind/user-blind.module';
import { BottleModule } from './models/bottle/bottle.module';
import { BlindBottleModule } from './models/blind-bottle/blind-bottle.module';

@Module({
  imports: [
    AppConfigModule,
    MysqlConfigModule,
    MysqlProviderModule,
    UserModule,
    BlindModule,
    UserBlindModule,
    BottleModule,
    BlindBottleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
