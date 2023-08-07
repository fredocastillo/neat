import dotenv from 'dotenv';
import { DataSource } from 'typeorm';

dotenv.config({
  path: 'apps/api/src/environments/.env.development'
});

const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['apps/api/src/**/*.entity.ts'],
  migrations: ['apps/api/src/app/database/migrations/*{.ts,.js}'],
  synchronize: false,
  migrationsRun: false,
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err)
  });

export default AppDataSource;