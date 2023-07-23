# Providers

Core modules that initiate a connection between the app & the provider engine (for eg. database).

```
src/app/providers
├── cache
│   └── redis
│       └── provider.module.ts
├── database
│   ├── mongo
│   │   └── provider.module.ts
│   ├── mysql
│   │   └── [...]
│   └── postgres
│       └── [...]
├── mail
│   └── smtp
│       └── [...]
└── queue
    └── redis
        └── [...]
```

Your ``` provider.module.ts ``` for each file would look something like this:

```
import { DatabaseType } from 'typeorm';
import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { MysqlConfigModule } from '../../../config/database/mysql/config.module';
import { MysqlConfigService } from '../../../config/database/mysql/config.service';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [MysqlConfigModule],
      useFactory: async (mysqlConfigService: MysqlConfigService) => ({
        type: 'mysql' as DatabaseType,
        host: mysqlConfigService.host,
        port: mysqlConfigService.port,
        username: mysqlConfigService.username,
        password: mysqlConfigService.password,
        database: mysqlConfigService.database,
        entities: [
          // ... All MySQL based schemas/entities
        ],
      }),
      inject: [MysqlConfigService],
    } as TypeOrmModuleAsyncOptions),
  ],
})
export class MysqlDatabaseProviderModule {}
```

Importing ```MysqlConfigModule``` & injecting ```MysqlConfigService``` from the ```src/config/database/mysql``` folder.

