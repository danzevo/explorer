import { eq } from "drizzle-orm";
import { db } from "../db/index.js";
import { files } from "../db/schema.js";

export class FileRepository {
    findByFolderId (folderId: number){
        return db.select().from(files).where(eq(files.folderId, folderId));
    }
}