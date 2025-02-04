"use client";

import { useRouter } from "next/navigation";

export default function ModalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const closeModal = () => {
    router.back(); // 前のページに戻る
  };

  return (
    <div onClick={closeModal}>
      <div
        onClick={(e) => e.stopPropagation()} // モーダル内部クリックで閉じないように
      >
        {children}
      </div>
    </div>
  );
}
