import CatPhotoListItem from "@/app/_components/practice/CatPhotoListItem";
import { catPhotos } from "@/app/_data/catPhotos";
import { Modal } from "@/app/_components/practice/Modal";

type Props = {
  params: {
    photoId: string;
  };
};

export default async function Photo({ params }: Props) {
  const { photoId } = await params;
  console.log(photoId);
  const photoData = catPhotos.find((photo) => photo.id === parseInt(photoId));
  console.log(photoData);

  if (!photoData?.id) {
    return <h1 className="text-center">No Photo Found for that ID.</h1>;
  }

  return (
    <Modal>
      <CatPhotoListItem photoData={photoData} />
    </Modal>
  );
}
