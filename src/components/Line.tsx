import {  ChevronUp, Gem, LayoutDashboard, MessageCircle, User } from "lucide-react"; // Import Lucide icons

const Line = () => {
  return (
    <div className="absolute left-[25px] lg:left-[100px] top-36 bottom-0 w-1 bg-blue-500 z-40">
      {/* Glowing Effect */}
      <div className="absolute inset-0 w-1 bg-blue-500 blur-xs opacity-75"></div>
      <div className="absolute inset-0 w-1 bg-blue-500 blur-3xl opacity-50"></div>

      {/* Top Arrow */}
      <ChevronUp className="absolute -top-5 left-1/2  -translate-x-1/2 translate-z-96 rotate-180 text-blue-500 w-6 h-6" />
      <LayoutDashboard className="absolute lg:top-[39rem] top-[41rem] left-1/2 z-50 text-white -translate-x-1/2  w-6 h-6" />
      <User className="absolute lg:top-[85rem] top-[129rem] left-1/2 z-50 text-white -translate-x-1/2   w-6 h-6" />
      <Gem className="absolute lg:top-[147rem] top-[206rem] left-1/2 z-50 text-white -translate-x-1/2   w-6 h-6" />
      <MessageCircle className="absolute lg:top-[196rem] top-[303rem] left-1/2 z-50 text-white -translate-x-1/2   w-6 h-6" />

      {/* Scroll Indicator (Animated Circle) */}

      {/* Bottom Arrow */}
      <ChevronUp className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-blue-500 w-6 h-6" />
    </div>
  );
};

export default Line;
