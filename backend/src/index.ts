import { Elysia } from "elysia";
import { folderRoutes } from "./presentation/http/folder.routes.js";
import { fileRoutes } from "./presentation/http/file.routes.js";
import { cors } from "@elysiajs/cors";

new Elysia()
    .use(cors({
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'DELETE']
    }))
    .use(folderRoutes)
    .use(fileRoutes)
    .listen(3000);

console.log('Backend running on http://localhost:3000')