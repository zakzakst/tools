import { catPhotos } from "@/app/_data/catPhotos";
import CatPhotoListItem from "@/app/_components/practice/CatPhotoListItem";

export type PhotoData = {
  id: number;
  title: string;
  path: string;
};

type Props = {
  params: {
    photoId: string;
  };
};

export default async function PhotoPage({ params: { photoId } }: Props) {
  const photoData = catPhotos.find((photo) => photo.id === parseInt(photoId));

  if (!photoData) {
    return <h1>写真が見つかりません</h1>;
  }

  return (
    <div className="mt-2 grid place-content-center">
      <CatPhotoListItem photoData={photoData} />
    </div>
  );
}
