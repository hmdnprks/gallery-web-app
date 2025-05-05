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
  const [imgSrc, setImgSrc] = useState(
    image_id
      ? `https://www.artic.edu/iiif/2/${image_id}/full/300,/0/default.jpg`
      : "/image-fallback.png",
  );

  return (
    <Link href={`/artworks/${id}`}>
      <div className="relative aspect-square w-full rounded overflow-hidden shadow-sm">
        <Image
          src={imgSrc}
          alt={alt}
          fill
          className="object-cover"
          placeholder={lqip ? "blur" : "empty"}
          blurDataURL={lqip}
          onError={() => setImgSrc("/image-fallback.png")}
        />
      </div>
    </Link>
  );
}
