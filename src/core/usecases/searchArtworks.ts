import { ArtworkRepository } from "../repositories/ArtworkRepository";
import { Artwork } from "../entities/Artwork";

export class SearchArtworks {
  constructor(private repo: ArtworkRepository) {}

  async execute(query: string): Promise<Artwork[]> {
    return this.repo.searchArtworks(query);
  }
}
