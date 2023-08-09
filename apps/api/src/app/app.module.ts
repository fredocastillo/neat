import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './config/app/app-config.module';
import { MysqlConfigModule } from './config/database/mysql/mysql-config.module';
import { MysqlProviderModule } from './providers/database/mysql/mysql-provider.module';
import { UsersModule } from './models/users/users.module';
import { BottlesModule } from './models/bottles/bottles.module';
import { BlindsModule } from './models/blinds/blinds.module';
import { BlindBottlesModule } from './models/blind-bottles/blind-bottles.module';
import { BlindUsersModule } from './models/blind-users/blind-users.module';
import { BlindBottleResultsModule } from './models/blind-bottle-results/blind-bottle-results.module';

@Module({
  imports: [
    AppConfigModule,
    MysqlConfigModule,
    MysqlProviderModule,
    UsersModule,
    BottlesModule,
    BlindsModule,
    BlindBottlesModule,
    BlindUsersModule,
    BlindBottleResultsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
