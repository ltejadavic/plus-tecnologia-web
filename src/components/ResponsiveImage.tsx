import Image from "next/image";
import type { ImageSlot } from "@/data/site";

type ResponsiveImageProps = {
  image: ImageSlot;
  className: string;
  imageClassName?: string;
  sizes: string;
};

export default function ResponsiveImage({
  image,
  className,
  imageClassName,
  sizes,
}: ResponsiveImageProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        className={`object-cover ${imageClassName || ""}`}
      />
    </div>
  );
}
