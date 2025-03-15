import api from "../../data.json";

const Faq = () => {
  return (
    <div className="py-8">
      <div className="flex flex-col gap-4 px-14 pb-10">
        <h1 className="flex justify-start text-white text-2xl font-semibold text-left lg:text-3xl">
          Frequently asked questions
        </h1>
        <p className="flex justify-center text-sm text-left text-[#AAAAAA] lg:justify-start">
          Hear from our marine enthusiasts about how Marine
        </p>
      </div>
      <div className="">
        <ul className="list-none gap-2 mx-10 lg:grid lg:grid-cols-2">
          {api.faq.map((list, index) => (
            <li
              key={index}
              className="before:content-['+'] font-normal before:mr-4 text-left flex text-2xl py-4"
            >
              {list.question}
            </li>
          ))}
        </ul>
      </div>
      <div className="text-sm mx-10 flex py-8 flex-col">
        <p className="text-[#AAAAAA] lg:text-lg"> Couldn’t find your answere?</p>
        <p className="text-blue-500 underline decorative underline-offset-2">
          {" "}
          Talk to us
        </p>
      </div>
      <div className="flex justify-center py-10 lg:pt-11 lg:px-48">
        <img
          alt="img"
          src="/footer.svg"
          className=" justify-center h-[34rem] lg:hidden"
        />
        <img
          alt="img"
          src="/footer2.svg"
          className=" justify-center h-[34rem] lg:flex hidden"
        />
      </div>
    </div>
  );
};

export default Faq;
