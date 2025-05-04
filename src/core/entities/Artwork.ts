export type Artwork = {
  id: number;
  title: string;
  image_id: string;
  credit_line: string;
  date_display: string | null;
  artist_display: string | null;
  description: string | null;
  thumbnail?: {
    lqip: string;
    width: number;
    height: number;
    alt_text: string;
  };
  artwork_type_title?: string;
  department_title?: string;
  medium_display?: string;
  dimensions?: string;
  publication_history?: string | null;
  exhibition_history?: string | null;
  provenance_text?: string | null;
};

export type ArtworkPaginationResult = {
  artworks: Artwork[];
  currentPage: number;
  totalPages: number;
};
