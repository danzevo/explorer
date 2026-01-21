import { pgTable, bigserial, varchar, bigint, timestamp } from "drizzle-orm/pg-core";

export const folders = pgTable('folders', {
    id: bigserial('id', {mode: 'number'}).primaryKey(),
    name: varchar('name', {length: 255}).notNull(),
    parentId: bigint('parent_id', { mode: 'number'}),
    createdAt: timestamp('created_at').defaultNow()
})

export const files = pgTable('files', {
    id: bigserial('id', {mode: 'number'}).primaryKey(),
    name: varchar('name', {length: 255}).notNull(),
    folderId: bigint('folder_id', {mode: 'number'}),
    size: bigint('size', {mode: 'number'}),
    createdAt: timestamp('created_at').defaultNow()
})