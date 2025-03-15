import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import api from "../../data.json";


const DetailCard = () => {
  return (
    <div className="py-8">
      <div className="flex flex-col gap-4 px-14 pb-10">
        <h1 className="flex justify-start text-white text-2xl font-semibold text-left">
          Every Vessel, Every More
        </h1>
        <p className="flex justify-center text-sm text-left text-[#AAAAAA]">
          Tap into live ship data — names, types, routes, destinations, and full
          history at your fingertips
        </p>
      </div>
      <div>
        {api.cards.map((card) => (
          <Card
            key={card.img}
            className="flex my-6 mx-14 rounded-4xl pt-0 rounded-t-4xl"
          >
            <CardHeader className="px-0 rounded-t-4xl">
              <img src={card.img} className="rounded-t-4xl" />
            </CardHeader>
            <CardContent className="gap-4 flex flex-col">
              <CardTitle>{card.title}</CardTitle>
              <CardDescription className="text-white opacity-30 break-words">
                {card.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DetailCard;
