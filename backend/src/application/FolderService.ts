import { FolderRepository } from "../infrastructure/repositories/FolderRepository.js";

const cache = new Map<string, any>();
export class FolderService {
    constructor(private repo: FolderRepository) {}

    async getTree() {
        const rows = await this.repo.findAll();
        const map = new Map<number, any>();
        const roots: any[] = [];

        rows.forEach(r => map.set(r.id, {...r, children: []}));

        rows.forEach(r => {
            if(!r.parentId) {
                roots.push(map.get(r.id));
            } else {
                map.get(r.parentId).children.push(map.get(r.id));
            }
        });

        return roots
    }

    async getChildren(parentId: number | null) {
        const key = `children:${parentId ?? 'root'}`;

        if(cache.has(key)) {
            // console.log('[CACHE HIT]', key);
            return cache.get(key)
        }
        // console.log('[CACHE MISS]', key);
        const result = this.repo.findByParentId(parentId);
        cache.set(key, result);
        
        return result;
    }

    async search(keyword: string) {
        return this.repo.searchByName(keyword);
    }
}