# Config

Application configurations using the package  [@nestjs/config](https://www.example.com)

The config/ folder consists of different sections of variable types to be loaded into our environment.

Example of creating configuration files [Creating Config Files in NestJS](https://medium.com/the-crowdlinker-chronicle/creating-config-files-in-nestjs-dcd059ae15e4)

```
src/app/config
├── app
│   ├── config.module.ts
│   ├── config.service.ts
│   └── configuration.ts
├── cache
│   ├── config.module.ts
│   ├── config.service.ts
│   └── configuration.ts
├── database
│   ├── mongo
│   │   ├── config.module.ts
│   │   ├── config.service.ts
│   │   └── configuration.ts
│   ├── mysql
│   │   └── [...]
│   └── postgres
│       └── [...]
├── queue
│   └── [...]
├── session
│   └── [...]
└── storage
    └── [...]
```