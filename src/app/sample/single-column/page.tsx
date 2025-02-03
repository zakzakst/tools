import type { Metadata } from "next";
import Title from "@/app/_components/Title";

const title = "サンプル";

export const metadata: Metadata = {
  title: title,
  description: title,
};

const Sample = () => {
  return (
    <>
      <Title>{title}</Title>
    </>
  );
};

export default Sample;
