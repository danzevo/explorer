import { Elysia } from "elysia";
import { folderRoutes } from "./presentation/http/folder.routes.js";
import { fileRoutes } from "./presentation/http/file.routes.js";

export const app = new Elysia()
    .use(folderRoutes)
    .use(fileRoutes)

if(process.env.NODE_ENV !== 'test') {
    app.listen(3000);
    console.log('Backend running on http://localhost:3000')
}
