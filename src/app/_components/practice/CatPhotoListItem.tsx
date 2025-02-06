// "use client";

// import Image from "next/image";
import Link from "next/link";
import { PhotoData } from "../../practice/photo/[photoId]/page";

type Props = {
  photoData: PhotoData;
};

export default function CatPhotoListItem({ photoData }: Props) {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl text-center">{photoData.title}</h1>
        <Link href={`/practice/photo/${photoData.id}`}>
          <div className="border-2 rounded-xl overflow-hidden aspect-square relative">
            {/* <Image
              src={photoData.path}
              alt={photoData.title}
              sizes="256px"
              fill
              style={{
                objectFit: "cover",
              }}
            /> */}
            <img
              src={photoData.path}
              alt=""
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </Link>
      </div>
    </>
  );
}
