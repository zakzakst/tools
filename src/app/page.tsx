import type { Metadata } from "next";
import Title from "@/app/_components/Title";

const title = "ホーム";

export const metadata: Metadata = {
  title: title,
  description: title,
};

const Home = () => {
  return (
    <>
      <Title>{title}</Title>
    </>
  );
};

export default Home;
