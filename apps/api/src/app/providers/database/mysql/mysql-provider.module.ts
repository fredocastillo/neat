import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { MysqlConfigModule } from '../../../config/database/mysql/mysql-config.module';
import { MysqlConfigService } from '../../../config/database/mysql/mysql-config.service';
import { DatabaseType } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [MysqlConfigModule],
      useFactory: async (mysqlConfigService: MysqlConfigService) => ({
        type: 'mysql' as DatabaseType,
        host: mysqlConfigService.host,
        port: mysqlConfigService.port,
        username: mysqlConfigService.user,
        password: mysqlConfigService.password,
        database: mysqlConfigService.database,
        synchronize: true,
        autoLoadEntities: true,
      }),
      inject: [MysqlConfigService],
    } as TypeOrmModuleAsyncOptions),
  ],
})
export class MysqlProviderModule {}
