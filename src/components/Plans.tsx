import api from "../../data.json";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Separator } from "./ui/separator";


const Plans = () => {
  return (
    <div className="py-8">
      <div className="flex flex-col gap-4 px-14 pb-10">
        <h1 className="flex justify-start text-white text-2xl font-semibold text-left">
          Smart plans for every voyage
        </h1>
        <p className="flex justify-center text-sm text-left text-[#AAAAAA]">
          Hear from our marine enthusiasts about how Marine Radar has enhanced
          their navigation and delivered real-time insights at sea.
        </p>
      </div>
      <div>
        {api.plans.map((plan) => (
          <Card
            key={plan.id}
            className={`mx-14 my-6 rounded-4xl ${
              plan.name === "Weekly"
                ? "shadow-[0_0_30px_#0A84FF59] border border-[#0A84FF] bg-gradient-to-b from-[#0c2844] to-[#0d1319]"
                : "bg-[#171717]"
            }`}
          >
            {" "}
            <CardContent className="">
              <h1 className="font-normal text-xl">{plan.name}</h1>
              <Separator className="my-4 fade bg-gradient-to-r from-transparent via-gray-500 to-transparent h-[1px]" />
              {Object.values(plan.features).map((feature, index) => (
                <div key={index} className="flex items-center gap-2 mb-4">
                  <Checkbox className="w-4 h-4 flex justify-center items-center data-[state=checked]:bg-blue-500 data-[state=checked]:text-black " />
                  <p className="flex items-center text-sm">{feature}</p>
                </div>
              ))}
              <h1 className="text-xl font-semibold">{plan.price}</h1>
              <Button
                className={`w-full rounded-2xl bg-[#171717] border-blue-600 text-blue-600 !mb-0 my-4 ${
                  plan.name === "Weekly"
                    ? "shadow-[0_0_30px_#0A84FF59] bg-blue-500 text-white"
                    : null
                }`}
                variant={"outline"}
              >
                {plan.cta}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Plans;
