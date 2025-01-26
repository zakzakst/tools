import type { Metadata } from "next";
import Title from "@/app/_components/Title";

const title = "ミーティング計画";

export const metadata: Metadata = {
  title: title,
  description: title,
};

const MeetingPlan = () => {
  return (
    <>
      <Title>{title}</Title>
      <div style={{ paddingBottom: "2000px" }}>spacer</div>
    </>
  );
};

export default MeetingPlan;
