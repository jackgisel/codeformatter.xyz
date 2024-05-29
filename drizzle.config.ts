import { defineConfig } from "drizzle-kit"

export default defineConfig({
    dialect: "sqlite",
    driver: "turso",
    schema: "./db/schema.js",
    out: "./drizzle",
    dbCredentials: {
        url: process.env.DATABASE_URL,
        authToken: process.env.DATABASE_TOKEN,
    }
})