import { db } from "../db/index.js"
import { files, folders } from "../db/schema.js"

async function seed() {
    console.log('Seeding database...')

    const [documents, pictures] = await db
        .insert(folders)
        .values([
            { name: 'Documents', parentId:null },
            { name: 'Pictures', parentId:null },
        ])
        .returning();

    const [work, personal] = await db
        .insert(folders)
        .values([
            { name: 'Work', parentId: documents.id },
            { name: 'Personal', parentId: documents.id }
        ])
        .returning();
    
    const [vacations] = await db
        .insert(folders)
        .values([{ name: 'Vacations', parentId: pictures.id }])
        .returning();

    const [projectA] = await db
        .insert(folders)
        .values([{ name: 'Project A', parentId: work.id }])
        .returning();
    
    await db.insert(files).values([
        { name: 'resume.pdf', folderId: personal.id, size: 123456 },
        { name: 'report.docs', folderId: projectA.id, size: 98765 },
        { name: 'beach.png', folderId: vacations.id, size: 54321 },
    ]);

    console.log('Seed complete');
    process.exit(0);
}

seed();