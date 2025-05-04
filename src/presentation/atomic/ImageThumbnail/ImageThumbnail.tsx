import Image from "next/image";
import Link from "next/link";

type Props = {
  id: number;
  src: string;
  alt?: string;
};

export default function ImageThumbnail({ id, src, alt }: Props) {
  return (
    <Link href={`/artworks/${id}`} className="block">
      <Image
        src={src}
        alt={alt || "Artwork"}
        width={300}
        height={300}
        className="object-cover aspect-square rounded"
      />
    </Link>
  );
}
