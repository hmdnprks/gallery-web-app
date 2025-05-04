"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { FetchArtworks } from "@core/usecases/fetchArtworks";
import { ArtworkRepositoryImpl } from "@data/repositories/ArtworkRepositoryImpl";
import { ArtworkApiDataSource } from "@data/datasources/ArtworkApiDataSource";
import { Artwork } from "@core/entities/Artwork";

const fetchArtworks = new FetchArtworks(
  new ArtworkRepositoryImpl(new ArtworkApiDataSource()),
);

const LIMIT = 24;

export default function useGallery() {
  const {
    data,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    error,
  } = useInfiniteQuery({
    queryKey: ["artworks"],
    queryFn: ({ pageParam = 1 }) => fetchArtworks.execute(pageParam, LIMIT),
    getNextPageParam: (lastPage) => {
      if (lastPage.currentPage < lastPage.totalPages) {
        return lastPage.currentPage + 1;
      }
      return undefined;
    },
    initialPageParam: 1,
  });

  const artworks: Artwork[] =
    data?.pages.flatMap((page) => page.artworks) ?? [];

  return {
    artworks,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasMore: !!hasNextPage,
    error,
  };
}
