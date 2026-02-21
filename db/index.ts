import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

const connectionString = process.env.DATABASE_URL!;

// Disable prefetch as it is not supported for "Transaction" pool mode which Supabase Transaction pool uses (port 6543)
// However, the URL has port 6543 which is transaction pooler.
export const client = postgres(connectionString, { prepare: false });
export const db = drizzle(client, { schema });
