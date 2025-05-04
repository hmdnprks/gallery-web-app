import { Artwork } from "../entities/Artwork";
import { ArtworkRepository } from "../repositories/ArtworkRepository";

export class GetArtworkDetail {
  constructor(private repo: ArtworkRepository) {}

  async execute(id: number): Promise<Artwork> {
    return this.repo.getArtworkDetail(id);
  }
}
