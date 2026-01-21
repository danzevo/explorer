import { Elysia } from "elysia";
import { FileService } from "../../application/FileService.js";
import { FileRepository } from "../../infrastructure/repositories/FileRepository.js";

const service = new FileService(new FileRepository());

export const fileRoutes = new Elysia({ prefix: '/api/v1/files' })
    .get('/folder/:id', ({ params }) =>
        service.getFiles(Number(params.id))
    )