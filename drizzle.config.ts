import 'dotenv/config'; // Load .env file
import { defineConfig } from 'drizzle-kit'; // defineConfig is a func that returns a config object


// out defineConfig func is passed to the defineConfig func from drizzle-kit
// Sets up drizzle environment
// export to be used elsewhere
export default defineConfig({
    out: './drizzle', // When migrations are run, the generated files will be placed in the drizzle folder
    schema: './src/db/schema.ts', // The schema file that defines the database schema
    dialect: 'postgresql', // Type of database
    dbCredentials: {
        url: process.env.DATABASE_URL!, // ! tells TS that the value is not null (non null assertion)
    }
});