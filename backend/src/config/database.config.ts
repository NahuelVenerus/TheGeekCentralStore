import { SequelizeModuleOptions } from '@nestjs/sequelize';
require('dotenv').config();

export const databaseConfig: SequelizeModuleOptions = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "3000", 10),
  define: {
    timestamps: false,
  },
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  autoLoadModels: true,
  synchronize: true,
};
