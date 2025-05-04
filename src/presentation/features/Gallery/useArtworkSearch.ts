"use client";

import { useQuery } from "@tanstack/react-query";
import { SearchArtworks } from "@core/usecases/searchArtworks";
import { ArtworkRepositoryImpl } from "@data/repositories/ArtworkRepositoryImpl";
import { ArtworkApiDataSource } from "@data/datasources/ArtworkApiDataSource";

const searchArtworks = new SearchArtworks(
  new ArtworkRepositoryImpl(new ArtworkApiDataSource()),
);

export default function useArtworkSearch(query: string) {
  return useQuery({
    queryKey: ["search-artworks", query],
    queryFn: () => searchArtworks.execute(query),
    enabled: query.length > 2,
  });
}
