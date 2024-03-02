import { Pool, PoolConfig } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

interface DatabaseConfig extends PoolConfig {
  user: string;
  host: string;
  password: string;
  database: string;
  port: number;
}

const dbConfig: DatabaseConfig = {
  user: process.env.DB_USER || 'your_database_user',
  host: process.env.DB_HOST || 'your_host',
  password: process.env.DB_PASSWORD || 'your_password',
  database: process.env.DB_NAME || 'your_database_name',
  port: parseInt(process.env.DB_PORT ?? 'your_port', 10),
};

export const pool: Pool = new Pool(dbConfig);
