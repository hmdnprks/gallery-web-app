"use client";

import { useEffect, useState } from "react";
import ImageThumbnail from "@presentation/atomic/ImageThumbnail/ImageThumbnail";
import ImageSkeleton from "@presentation/atomic/ImageSkeleton/ImageSkeleton";
import SearchBar from "@presentation/atomic/SearchBar/SearchBar";
import useGallery from "./useGallery";
import useArtworkSearch from "./useArtworkSearch";
import { useDebounce } from "@lib/hooks/useDebounce";

export default function Gallery() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 400);
  const isSearching = debouncedQuery.length > 2;

  const {
    artworks,
    fetchNextPage,
    hasMore,
    isLoading,
    isFetchingNextPage,
    error,
  } = useGallery();

  const {
    data: searchedArtworks,
    isLoading: isSearchLoading,
    isError: isSearchError,
  } = useArtworkSearch(debouncedQuery);

  useEffect(() => {
    if (!isSearching) {
      const handleScroll = () => {
        const nearBottom =
          window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 100;
        if (nearBottom && hasMore) fetchNextPage();
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [hasMore, fetchNextPage, isSearching]);

  const displayedArtworks = isSearching ? (searchedArtworks ?? []) : artworks;
  const loading =
    (isLoading && !isSearching) || (isSearchLoading && isSearching);
  const hasError = (error && !isSearching) || (isSearchError && isSearching);

  return (
    <div className="p-4 pt-0 space-y-4">
      <div className="sticky top-0 z-10 bg-white pt-4 pb-2">
        <SearchBar value={query} onChange={setQuery} />
      </div>

      {loading ? (
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 24 }).map((_, i) => (
            <ImageSkeleton key={i} />
          ))}
        </div>
      ) : hasError ? (
        <p className="text-center py-10 text-red-500">
          Failed to load artworks. Please try again.
        </p>
      ) : (
        <div className="grid grid-cols-3 gap-2">
          {displayedArtworks.map((artwork) => (
            <ImageThumbnail
              key={artwork.id}
              id={artwork.id}
              alt={artwork.title}
              image_id={artwork.image_id}
              lqip={artwork.thumbnail?.lqip}
            />
          ))}

          {!isSearching &&
            isFetchingNextPage &&
            Array.from({ length: 6 }).map((_, i) => (
              <ImageSkeleton key={`s-${i}`} />
            ))}
        </div>
      )}
    </div>
  );
}
