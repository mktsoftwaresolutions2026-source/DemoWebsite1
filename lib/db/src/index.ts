import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "./schema/index.js";

const { Pool } = pg;

const connectionString = process.env.DATABASE_URL || "postgres://dummy:dummy@localhost/dummy";

if (!process.env.DATABASE_URL) {
  console.warn(
    "⚠️ DATABASE_URL is not set! Database queries will fail. Ensure you have added DATABASE_URL to your Vercel Environment Variables.",
  );
}

export const pool = new Pool({ connectionString });
export const db = drizzle(pool, { schema });

export * from "./schema/index.js";
