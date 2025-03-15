import api from "../../data.json";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";


const UserFeedback = () => {
  return (
    <div className="py-8">
      <div className="flex flex-col gap-4 px-14 pb-10">
        <h1 className="flex justify-start text-white text-2xl font-semibold text-left lg:text-3xl">
          What our users are saying
        </h1>
        <p className="flex justify-center lg:justify-start text-sm text-left text-[#AAAAAA]">
          Hear from our marine enthusiasts about how Marine Radar has enhanced
          their navigation and delivered real-time insights at sea.
        </p>
      </div>
      <div className="lg:grid lg:grid-cols-3">
        {api.feedback.map((feed) => (
          <Card key={feed.id} className="mx-14 my-6 lg:my-0 py-10 lg:py-0 pb-4 lg:pb-0 rounded-4xl lg:w-2xs">
            <CardContent className="gap-4 flex flex-col">
              <p className="text-white opacity-30 text-sm">{feed.description}</p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={feed.img} />
                  <AvatarFallback>NM</AvatarFallback>
                </Avatar>
                <h1>{feed.name}</h1>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UserFeedback;
