/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
console.log('pools--------------',pool)
export const query = (text: string, params?: any[]) => pool.query(text, params);
