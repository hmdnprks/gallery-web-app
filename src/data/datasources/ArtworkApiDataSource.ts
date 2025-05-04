// data/datasources/ArtworkApiDataSource.ts
import { Artwork } from "@core/entities/Artwork";
import { axiosInstance } from "@infrastructure/api/articClient";

export class ArtworkApiDataSource {
  async getArtworks(
    page: number,
    limit: number,
  ): Promise<{
    data: Artwork[];
    pagination: { current_page: number; total_pages: number };
  }> {
    const response = await axiosInstance.get("/artworks", {
      params: {
        page,
        limit,
      },
    });

    return {
      data: response.data.data,
      pagination: response.data.pagination,
    };
  }

  async getArtworkDetail(id: number): Promise<Artwork> {
    const { data } = await axiosInstance.get(`/artworks/${id}`);
    const dataArtwork = data.data;
    return {
      id: dataArtwork.id,
      title: dataArtwork.title,
      image_id: dataArtwork.image_id,
      credit_line: dataArtwork.credit_line,
      date_display: dataArtwork.date_display,
      artist_display: dataArtwork.artist_display,
      description: dataArtwork.description,
      thumbnail: dataArtwork.thumbnail,
      artwork_type_title: dataArtwork.artwork_type_title,
      department_title: dataArtwork.department_title,
      medium_display: dataArtwork.medium_display,
      dimensions: dataArtwork.dimensions,
      publication_history: dataArtwork.publication_history,
      exhibition_history: dataArtwork.exhibition_history,
      provenance_text: dataArtwork.provenance_text,
    };
  }
}
