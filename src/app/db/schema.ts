import { time } from "console";
import { pgTable, text, timestamp, integer, uuid, varchar } from "drizzle-orm/pg-core";

export const workspaces = pgTable('workspaces', {
    // id is a variable assigned to uuid function with column name 'id'
    // id is a primary key which means it is unique and not null and helps to identify a row in a table
    id: uuid('id').defaultRandom().primaryKey().notNull(),
    createdAt:timestamp('created_at',{
        withTimezone:true,
        mode: "string"
    }),
    workspaceOwner: uuid("workspace_owner").notNull(),
    title: text("title").notNull(),
    iconId: text("icon_id").notNull(),
    data: text("data"),
    inTrash: text("in_trash"),
    logo: text("logo"),
    bannerUrl: text("banner_url"),
});