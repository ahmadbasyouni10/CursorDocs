import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import "dotenv/config"

// Allows us to query or interact with the database in the code
// db is an instance of the database wrapped in a drizzle object
const client = postgres(process.env.DATABASE_URL!);
export const db = drizzle(client);