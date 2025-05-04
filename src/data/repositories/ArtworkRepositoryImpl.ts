// data/repositories/ArtworkRepositoryImpl.ts
import { ArtworkRepository } from "@core/repositories/ArtworkRepository";
import { ArtworkApiDataSource } from "@data/datasources/ArtworkApiDataSource";
import { Artwork, ArtworkPaginationResult } from "@core/entities/Artwork";

export class ArtworkRepositoryImpl implements ArtworkRepository {
  constructor(private datasource: ArtworkApiDataSource) {}

  async fetchArtworks(
    page: number,
    limit: number,
  ): Promise<ArtworkPaginationResult> {
    const res = await this.datasource.getArtworks(page, limit);
    return {
      artworks: res.data,
      currentPage: res.pagination.current_page,
      totalPages: res.pagination.total_pages,
    };
  }

  async getArtworkDetail(id: number): Promise<Artwork> {
    return this.datasource.getArtworkDetail(id);
  }

  async searchArtworks(query: string): Promise<Artwork[]> {
    return this.datasource.searchArtworks(query);
  }
}
