import { Elysia } from "elysia";
import { FolderService } from "../../application/FolderService.js";
import { FolderRepository } from "../../infrastructure/repositories/FolderRepository.js";

const service = new FolderService(new FolderRepository());

export const folderRoutes = new Elysia({ prefix: '/api/v1/folders'})
    .get('/tree', () => service.getTree())
    
    .get('/search', ({ query }) => {
        if(!query.q) return []

        return service.search(query.q)
    })

    .get('/:id/children', ({ params }) => 
        service.getChildren(Number(params.id))
    )
    
    .get('/', ({ query }) => {
        let parentId: number | null = null
        if(query.parentId !== undefined && query.parentId !== 'null') {
            parentId = Number(query.parentId)
        }

        return service.getChildren(parentId);
    })