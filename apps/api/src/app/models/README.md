# Models

Parent folder that contains all model related data. Documentation for each of the files below. 

[Best Way to Inject Repositories using TypeORM (NestJS)](https://medium.com/the-crowdlinker-chronicle/best-way-to-inject-repositories-using-typeorm-nestjs-e134c3dbf53c)

```
src/app/models
├── addresses
│   ├── entities
│   │   └── address.entity.ts
│   ├── interfaces
│   │   └── address.interface.ts
│   ├── serializers
│   │   └── address.serializer.ts
│   ├── addressess.controller.ts
│   ├── addresses.module.ts
│   ├── addresses.repository.ts
│   └── addresses.service.ts
└── users
    ├── entities
    │   └── user.entity.ts
    ├── interfaces
    │   └── user.interface.ts
    ├── serializers
    │   └── user.serializer.ts
    ├── users.controller.ts
    ├── users.module.ts
    ├── users.repository.ts
    └── users.service.ts
```