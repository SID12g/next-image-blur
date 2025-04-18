import Image from "next/image";
import Link from "next/link";
import BackgroundImage from "@/../public/background.png";

export default function StaticPage() {
  return (
    <div className="p-10">
      <Link href="/static">
        <h1 className="text-4xl font-bold">Static</h1>
      </Link>
      <Image
        src={BackgroundImage}
        alt="background"
        placeholder="blur"
        width={330}
        height={120}
      />
    </div>
  );
}
