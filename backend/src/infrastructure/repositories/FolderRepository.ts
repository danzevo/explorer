import { eq, isNull, like } from "drizzle-orm";
import { db } from "../db/index.js";
import { folders } from "../db/schema.js";

export class FolderRepository {
    async findAll() {
        return db.select().from(folders);
    } 

    async findByParentId(parentId: number | null) {
        if(parentId === null) {
            return db.select().from(folders).where(isNull(folders.parentId));
        }
        return db.select().from(folders).where(eq(folders.parentId, parentId));
    }

    async searchByName(name: string) {
        return db
            .select()
            .from(folders)
            .where(like(folders.name, `%${name}%`))
            .limit(20)
    }
}