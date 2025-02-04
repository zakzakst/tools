"use client";

import { useState } from "react";
import { PhotoData } from "../../practice/photo/[photoId]/page";
import CatPhotoListItem from "./CatPhotoListItem";

export default function CatPhotoList({
  photoDataList,
}: {
  photoDataList: PhotoData[];
}) {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pb-8">
        {photoDataList.map((photoData) => (
          <CatPhotoListItem key={photoData.id} photoData={photoData} />
        ))}
      </div>
      <div className="flex flex-col items-center gap-4 py-8 border-t">
        <p className="text-xl font-semibold">カウント: {count}</p>
        <button
          onClick={() => setCount(count + 1)}
          className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
        >
          カウントを増やす
        </button>
      </div>
    </>
  );
}
