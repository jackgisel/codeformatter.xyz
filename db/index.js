import { drizzle } from 'drizzle-orm/libsql'
import { createClient } from '@libsql/client'

console.log(process.env.DATABASE_URL)

const client = createClient({
    url: process.env.DATABASE_URL,
    authToken: process.env.DATABASE_TOKEN,
})

export const db = drizzle(client)
