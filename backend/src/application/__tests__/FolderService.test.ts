import { describe, it } from "vitest"
import { FolderService } from "../FolderService.js"
import { expect } from "bun:test"

const mockRepo = {
    findByParentId: async() => [],
    findAll: async() => [
        {id:1, name: 'Root', parentId: null},
        {id:2, name: 'Child', parentId: 1}
    ]
}

describe('FolderService', () => {
    it('Builds a folder tree correctly', async() => {
        const service = new FolderService(mockRepo as any)
        const tree = await service.getTree()

        expect(tree).toHaveLength(1)
        expect(tree[0].name).toBe('Root')
        expect(tree[0].children).toHaveLength(1)
        expect(tree[0].children[0].name).toBe('Child')
    })
})