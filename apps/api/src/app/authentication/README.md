# Authentication

Parent folder that contains database migrations factories and seeders.

Files according to NestJs authentication documenation.
[Authentication | NestJS](https://docs.nestjs.com/security/authentication)

```
src/app/authentication
├── dto
│   └── login.dto.ts
├── interfaces
│   ├── jwt-payload.interface.ts
│   ├── login.interface.ts
│   └── token.interface.ts
├── serializers
│   └── token.serializer.ts
├── auth.controller.ts
├── auth.module.ts
├── auth.service.ts
└── jwt.strategy.ts
```