"use client";

// import type { Metadata } from "next";
import Link from "next/link";
import Title from "@/app/_components/Title";

const title = "サンプル";

// export const metadata: Metadata = {
//   title: title,
//   description: title,
// };

const Sample = () => {
  return (
    <>
      <Title>{title}</Title>
      <Link href="/sample/page2/modal">モーダルを開く</Link>
    </>
  );
};

export default Sample;
