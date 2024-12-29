import type { Config } from 'drizzle-kit';
import { dbConfig } from './lib/db/config';

export default {
  schema: './lib/db/schema.ts',
  out: './lib/db/migrations',
  driver: 'mysql2',
  dbCredentials: {
    uri: dbConfig.url,
  },
} satisfies Config;