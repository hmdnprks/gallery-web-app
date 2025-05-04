"use client";

import { useEffect } from "react";
import ImageThumbnail from "@presentation/atomic/ImageThumbnail/ImageThumbnail";
import ImageSkeleton from "@presentation/atomic/ImageSkeleton/ImageSkeleton";
import useGallery from "./useGallery";

export default function Gallery() {
  const {
    artworks,
    fetchNextPage,
    hasMore,
    isLoading,
    isFetchingNextPage,
    error,
  } = useGallery();

  useEffect(() => {
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      if (nearBottom && hasMore) fetchNextPage();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, fetchNextPage]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-3 gap-2">
        {Array.from({ length: 12 }).map((_, i) => (
          <ImageSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-center py-10 text-red-500">
        Failed to load artworks. Please try again.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-2">
      {artworks.map((artwork) => (
        <ImageThumbnail
          key={artwork.id}
          id={artwork.id}
          src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/300,/0/default.jpg`}
          alt={artwork.title}
        />
      ))}

      {isFetchingNextPage &&
        Array.from({ length: 6 }).map((_, i) => (
          <ImageSkeleton key={`s-${i}`} />
        ))}
    </div>
  );
}
