import { drizzle } from 'drizzle-orm/libsql'
import { createClient } from '@libsql/client'

const url = process.env.DATABASE_URL
console.log("URL FOR DATABASE_URL: " + url)

const client = createClient({
    url,
    authToken: process.env.DATABASE_TOKEN,
})

export const db = drizzle(client)
