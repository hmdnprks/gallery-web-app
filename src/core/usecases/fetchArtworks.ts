// core/usecases/fetchArtworks.ts
import { ArtworkRepository } from "@core/repositories/ArtworkRepository";
import { ArtworkPaginationResult } from "@core/entities/Artwork";

export class FetchArtworks {
  constructor(private repo: ArtworkRepository) {}

  async execute(page: number, limit: number): Promise<ArtworkPaginationResult> {
    return this.repo.fetchArtworks(page, limit);
  }
}
