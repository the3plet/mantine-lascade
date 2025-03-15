import { Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <div className="bottom-0 bg-[#0D0D0D] p-8 lg:px-32">
      <div className="lg:flex lg:justify-between">

      <div className="flex  gap-3 py-8 px-6">
        <img alt="logo" src="/logo.png" className="w-12" />
        <p className="flex items-center font-semibold text-xl">Marine Radar</p>
      </div>
      <div className="grid grid-cols-3 lg:flex lg:items-center lg:gap-8">
        <p className="text-[#D0DAF5] p-4 px-3 lg:p-0 basis-1/3">Home</p>
        <p className="text-[#D0DAF5] p-4 px-1 lg:p-0 basis-1/3">News</p>
        <p className="text-[#D0DAF5] p-4 px-1 lg:p-0 basis-1/3">Experience</p>
        <p className="text-[#D0DAF5] p-4 lg:p-0 basis-1/3 break-keep text-nowrap">
          About us
        </p>
        <p className="text-[#D0DAF5] p-4 lg:p-0 basis-1/3">Jobs</p>
        <p className="text-[#D0DAF5] p-4 lg:p-0 basis-1/3">Contact</p>
      </div>
      </div>
      <div className="flex items-center justify-between py-8 px-4 lg:flex-row-reverse">
        <p className="text-xs items-center flex text-[#D0DAF5]">© Copyright 2022 - ABC</p>
        <div className="flex gap-3">
          <Facebook />
          <Twitter />
          <Youtube />
        </div>
      </div>
    </div>
  );
};

export default Footer;
