import { pgTable, serial, varchar, text, timestamp } from 'drizzle-orm/pg-core';

export const projectSubmissions = pgTable('project_submissions', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 255 }).notNull(),
    phone: varchar('phone', { length: 50 }),
    email: varchar('email', { length: 255 }).notNull(),
    company: varchar('company', { length: 255 }),
    interest: varchar('interest', { length: 100 }),
    projectDetails: text('project_details'),
    timeline: varchar('timeline', { length: 100 }),
    createdAt: timestamp('created_at').defaultNow().notNull(),
});
