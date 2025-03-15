import React from "react";
import HeroSection from "../components/HeroSection";
import DetailCard from "@/components/DetailCard";
import UserFeedback from "@/components/UserFeedback";
import Plans from "@/components/Plans";
import Faq from "@/components/FAQ";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="flex flex-col pb-10 gap-6">
      <HeroSection />
      <DetailCard />
      <UserFeedback />
      <Plans />
      <Faq />
    </div>
  );
};

export default Home;
