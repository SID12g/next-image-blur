import { getBlurDataUrl } from "next-image-blur";
import Image from "next/image";
import Link from "next/link";

const ImageList = [
  { src: "/1.png", alt: "1" },
  { src: "/2.png", alt: "2" },
  { src: "/3.png", alt: "3" },
  { src: "/4.png", alt: "4" },
];

export default function DynamicPage() {
  return (
    <div className="p-10">
      <Link href="/dynamic">
        <h1 className="text-4xl font-bold">Dynamic</h1>
      </Link>
      {ImageList.map(async (image, index) => {
        const blurDataURL = await getBlurDataUrl(image.src);
        return (
          <Image
            width={400}
            height={225}
            key={index}
            src={image.src}
            alt={image.alt}
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
        );
      })}
    </div>
  );
}
