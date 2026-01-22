import { beforeAll, afterAll, describe, expect, it } from "vitest";
import { app } from "../../index.js";

describe('Folders API', () => {
    it('return root folders', async() => {
        const res = await app.fetch(
            new Request("http://localhost/api/v1/folders?parentId=null")
        )

        expect(res.status).toBe(200)

        const body = await res.json()
        expect(Array.isArray(body)).toBe(true)
    })

    it('return children of a folder', async () => {
        const res = await app.fetch(
            new Request('http://localhost/api/v1/folders/1/children')
        )

        expect(res.status).toBe(200)

        const body = await res.json()
        expect(Array.isArray(body)).toBe(true)
    })
})