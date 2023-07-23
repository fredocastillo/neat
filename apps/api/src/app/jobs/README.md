# Jobs

Consumers and producers for Queues

This is based on the default queueing technique provided in [Queues | NestJS ](https://docs.nestjs.com/techniques/queues) documentation using the package ```nestjs/bull```.

```
src/app/jobs
├── consumers
│   └── verification-mail
│       └── verification-mail.job.consumer.ts
└── producers
    └── verification-mail
        └── verification-mail.job.producer.ts
```