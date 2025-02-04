import CatPhotoList from "@/app/_components/practice/CatPhotoList";
import { catPhotos } from "@/app/_data/catPhotos";

export default async function RootPage() {
  return (
    <main className="container mx-auto px-4">
      <CatPhotoList photoDataList={catPhotos} />
    </main>
  );
}
