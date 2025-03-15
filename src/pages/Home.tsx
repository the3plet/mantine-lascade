import HeroSection from "../components/HeroSection";
import DetailCard from "@/components/DetailCard";
import UserFeedback from "@/components/UserFeedback";
import Plans from "@/components/Plans";
import Faq from "@/components/Faq";
import Line from "@/components/Line";


const Home = () => {
  return (
    <div className="relative flex flex-col pb-10 gap-6 ">
      <Line/>
      <HeroSection />
      <div className="lg:px-32 lg:space-y-32">

      <DetailCard />
      <UserFeedback />
      <Plans />
      <Faq/>
      </div>
    </div>
  );
};

export default Home;
