# Database

Parent folder that contains database migrations factories and seeders.

Documentations for more on factories and seeders.
[Seeding Databases Using NestJS](https://medium.com/the-crowdlinker-chronicle/seeding-databases-using-nestjs-cd6634e8efc5)

```
src/app/database
├── factories
│   ├── addresses
│   │   └── factory.ts
│   └── users
│       └── factory.ts
├── migrations
│   ├── 1590973586541-CreateAddressesTable.ts
│   └── 1592951122241-CreateUsersTable.ts
└── seeders
    ├── addresses
    │   ├── seeder.module.ts
    │   └── seeder.service.ts
    └── users
        ├── seeder.module.ts
        └── seeder.service.ts
```