import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type ImageThumbnailProps = {
  id: number;
  image_id?: string;
  lqip?: string;
  alt: string;
};

export default function ImageThumbnail({
  id,
  image_id,
  lqip,
  alt,
}: ImageThumbnailProps) {
  const hasValidImage = !!image_id;
  const fallbackStatic = "/image-fallback.png";

  const [imgSrc, setImgSrc] = useState(
    hasValidImage
      ? `https://www.artic.edu/iiif/2/${image_id}/full/300,/0/default.jpg`
      : lqip || fallbackStatic,
  );

  const placeholderType = lqip && !hasValidImage ? "blur" : "empty";
  const blurDataURL = lqip && !hasValidImage ? lqip : undefined;

  return (
    <Link href={`/artworks/${id}`}>
      <div className="relative aspect-square w-full rounded overflow-hidden shadow-sm">
        <Image
          src={imgSrc}
          alt={alt}
          fill
          className="object-cover"
          placeholder={placeholderType}
          blurDataURL={blurDataURL}
          onError={() => setImgSrc(fallbackStatic)}
        />
      </div>
    </Link>
  );
}
