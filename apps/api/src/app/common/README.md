# Common

NestJS core fundamentals like guards, pipes, decorators, ...etc

One extra thing you’d see here is ```src/app/decorator/validations``` folder. This folder is based on custom validations built using ```class-validator``` .

You could also add a utils folder for custom classes… in this case, let’s say a custom logger class? So you could create a file in ```src/app/common/utils/logger```.

```
src/app/common
├── constants
│   └── settings.ts
├── decorators
│   ├── metadata
│   │   └── user-types.decorator.ts
│   ├── requests
│   │   └── logged-in-user.decorator.ts
│   └── validations
│       ├── UserExists.ts
│       └── UniqueUserEmail.ts
├── exceptions
│   └── http-exception.filter.ts
├── guards
│   └── user-types.guard.ts
├── helpers
│   ├── exceptions
│   │   └── validation.helper.ts
│   ├── responses
│   │   ├── error.helper.ts
│   │   └── success.helper.ts
│   ├── number.helper.ts
│   ├── array.helper.ts
│   ├── query.helper.ts
│   ├── request.helper.ts
│   └── string.helper.ts
├── interceptors
│   └── http-cache.interceptor.ts
├── interfaces
│   ├── inputs.interface.ts
│   └── search.interface.ts
├── middleware
│   └── models
│       └── user.middleware.ts
├── pipes
│   ├── models
│   │   └── user-entity.pipe.ts
│   ├── search.pipe.ts
│   └── validation.pipe.ts
└── serializers
    ├── responses
    │   ├── error.serializer.ts
    │   └── success.serializer.ts
    ├── validation
    │   └── validation-error.serializer.ts
    └── model.serializer.ts
```

