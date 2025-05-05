"use client";

import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import { getSavedArtworks, removeArtwork } from "@lib/storage/artwork";
import { Artwork } from "@core/entities/Artwork";
import Image from "next/image";

export default function SavedPage() {
  const [savedArtworks, setSavedArtworks] = useState<Artwork[]>([]);

  useEffect(() => {
    const saved = getSavedArtworks();
    setSavedArtworks(saved);
  }, []);

  const handleDelete = (id: number) => {
    removeArtwork(id);
    setSavedArtworks((prev) => prev.filter((a) => a.id !== id));
  };

  console.log("savedArtworks :>> ", savedArtworks);

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-lg font-semibold mb-2 text-gray-600">Save Image</h1>

      {savedArtworks.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">No saved artworks.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {savedArtworks.map((art) => (
            <div
              key={art.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="aspect-[1/1] w-full relative">
                <Image
                  src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`}
                  alt={art.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-3 flex justify-between items-start">
                <div>
                  <p className="font-semibold text-gray-600 mb-2">
                    {art.title}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    {art.thumbnail?.alt_text || "Description"}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    Score: {art.colorfulness?.toFixed(1) ?? "N/A"}
                  </p>
                </div>

                <button onClick={() => handleDelete(art.id)}>
                  <Trash2 className="text-red-500 w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
