import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core'
import {sql} from "drizzle-orm"

export const actions = sqliteTable('actions', {
    id: integer('id').primaryKey(),
    title: text('title'),
    prompt: text('prompt'),
    createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`).notNull()
})