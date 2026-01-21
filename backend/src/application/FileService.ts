import { FileRepository } from "../infrastructure/repositories/FileRepository.js";

export class FileService {
    constructor(private repo: FileRepository) {}

    getFiles(folderId: number) {
        return this.repo.findByFolderId(folderId);
    }
}