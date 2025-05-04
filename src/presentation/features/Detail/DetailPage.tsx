"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { GetArtworkDetail } from "@core/usecases/getArtworkDetail";
import { ArtworkRepositoryImpl } from "@data/repositories/ArtworkRepositoryImpl";
import { ArtworkApiDataSource } from "@data/datasources/ArtworkApiDataSource";
import Button from "@presentation/atomic/Button/Button";
import DetailSection from "@component/presentation/ui/DetailSection/DetailSection";
import HeaderBack from "@component/presentation/atomic/HeaderBack/HeaderBack";

const getArtworkDetail = new GetArtworkDetail(
  new ArtworkRepositoryImpl(new ArtworkApiDataSource()),
);

export default function DetailPage() {
  const { id } = useParams();
  const artworkId = Number(id);

  const {
    data: artwork,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["artwork", id],
    queryFn: () => getArtworkDetail.execute(artworkId),
    enabled: !isNaN(artworkId),
  });

  if (isLoading) return <p className="text-center py-10">Loading...</p>;
  if (error || !artwork)
    return (
      <p className="text-center py-10 text-red-500">Failed to load artwork.</p>
    );

  return (
    <div className="p-4">
      <HeaderBack title="Detail" />
      <div className="aspect-square w-full mb-4 relative">
        <Image
          src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
          alt={artwork.title}
          fill
          className="object-cover rounded"
        />
      </div>

      <div className="flex justify-between items-center mb-2">
        <p className="text-sm text-gray-500">Credit: {artwork.credit_line}</p>
        <Button disabled={false}>Save</Button>
      </div>

      <div className="space-y-4">
        <DetailSection title="Description">
          {artwork.thumbnail?.alt_text || "N/A"}
        </DetailSection>
        <DetailSection title="Provenance Text">
          {artwork.provenance_text || "N/A"}
        </DetailSection>
        <DetailSection title="Publication History">
          {artwork.publication_history || "N/A"}
        </DetailSection>
        <DetailSection title="Exhibition History">
          {artwork.exhibition_history || "N/A"}
        </DetailSection>
        <DetailSection title="Artist">
          {artwork.artist_display || "N/A"}
        </DetailSection>
        <DetailSection title="Date">
          {artwork.date_display || "N/A"}
        </DetailSection>
      </div>
    </div>
  );
}
