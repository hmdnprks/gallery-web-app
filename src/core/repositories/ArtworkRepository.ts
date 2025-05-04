import { ArtworkPaginationResult, Artwork } from "@core/entities/Artwork";

export interface ArtworkRepository {
  fetchArtworks(page: number, limit: number): Promise<ArtworkPaginationResult>;
  getArtworkDetail(id: number): Promise<Artwork>;
}
