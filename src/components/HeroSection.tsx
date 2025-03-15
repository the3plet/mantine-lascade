import { Button } from "./ui/button";


const HeroSection = () => {
  return (
    <div className="bg-[#0C0C0C] flex flex-col  gap-6 pt-20 rounded-b-3xl mb-14">
      <div className="px-8  gap-6 flex flex-col lg:px-48">
        <h1 className="flex  justify-start text-white text-5xl lg:text-7xl font-semibold text-start    lg:line-clamp-2">
          Track any Vessel, 
          Anywhere!
        </h1>
        <p className="text-[#AAAAAA] flex justify-start text-lg font-semibold">
          Stay ahead of the waves!
        </p>
        <Button className="bg-[#0A84FF] text-white rounded-3xl shadow-[0px_0px_30px_#0A84FF59] w-36 hidden lg:flex lg:items-center lg:text-center lg:py-6 [text-shadow:0px_0px_2px_rgba(255,255,255,0.8)]">
          Try For free
        </Button>
        <Button className="bg-[#0A84FF] rounded-3xl text-white  shadow-[0px_0px_15px_#0A84FF59] w-32 lg:hidden flex justify-center items-center  [text-shadow:0px_0px_2px_rgba(255,255,255,0.8)]">
          Get the app
        </Button>
      </div>

      <div className="relative lg:flex lg:h-fit ">
        <div className=" h-[300px] overflow-hidden rounded-3xl relative mt-0 lg:mt-10 z-10 lg:h-[200] lg:w-full w-screen lg:flex lg:justify-end lg:">
          <img
            alt="img"
            className="w-xs scale-[3] lg:scale-[3] h-auto object-cover translate-y-6 lg:translate-x-0 lg:translate-y-20 lg:h-xs  lg:mr-32 right-0 lg:flex lg:justify-end "
            src="https://s3-alpha-sig.figma.com/img/24ab/00dd/5cd9c19d05ae010351f2e73bf714b89b?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cNCmLrQY1sg33NKqPirsyf6bJ8sE6XLYrCWp2ZID~hcsfm~rA20d6gr1mvWpYqoT8Bl-SWybpv0xhJUeKJkFKpFF-PZ-e935QL~jX85SiFcp7rAugqGOkmaPYLgnxaI3u5l07hLgp4urQqMfYzseXp5zgQX2BZQCvp031S2ybFz33SKUWHDEABnXqp9Y~D5EajZA2X8q6otuHlfQ1pPpEtQmmsMu7aZPqOITTfz3jnCAQguW7pT5ESMmXhNCo3jljSkxndoMQchP7MFECch1wQ5N1NUOq0nqNjBnDMF77a0iWrAtB5BXChudD6xy3qFh8zMI7t5WP5LJd9KlQaQ2yQ__"
          />
          {/* SVG Positioned at Right Bottom */}
          <div className="absolute bottom-14 right-6 flex flex-col gap-2 lg:hidden">
            <svg
              width="46"
              height="38"
              viewBox="0 0 46 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="46" height="38" rx="19" fill="white" />
              <path
                d="M16.5597 12.0048L23.8431 19.1473L16.6139 26.3556C16.4956 26.2016 16.4038 26.0289 16.3422 25.8448C16.3104 25.6362 16.3104 25.4241 16.3422 25.2156V12.9489C16.3206 12.6198 16.3964 12.2906 16.5589 12.0048M26.9806 16.0323L24.6031 18.3873L17.4064 11.3098C17.6397 11.2289 17.8897 11.2064 18.1339 11.2448C18.5172 11.3498 18.8831 11.5114 19.2189 11.7223L25.7322 15.3264C26.1556 15.5539 26.5681 15.7931 26.9806 16.0323ZM24.6039 19.9181L26.9697 22.2414L25.2547 23.1964L20.0222 26.1048C19.5889 26.3439 19.1539 26.5723 18.7306 26.8331C18.5494 26.9459 18.3463 27.0187 18.1348 27.0467C17.9233 27.0747 17.7082 27.0573 17.5039 26.9956L24.6039 19.9181ZM30.7372 19.1473C30.7433 19.4387 30.6697 19.7262 30.5243 19.9788C30.3789 20.2314 30.1673 20.4395 29.9122 20.5806L27.9572 21.6656L25.3847 19.1473L27.9681 16.5856C28.6306 16.9548 29.2822 17.3239 29.9331 17.6714C30.1926 17.8165 30.4058 18.0321 30.548 18.2933C30.6902 18.5544 30.7563 18.8505 30.7372 19.1473Z"
                fill="black"
              />
            </svg>
            <svg
              width="46"
              height="38"
              viewBox="0 0 46 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="46" height="38" rx="19" fill="white" />
              <path
                d="M27.0361 18.5078C27.0435 17.9306 27.1968 17.3647 27.4818 16.8626C27.7667 16.3606 28.174 15.9388 28.6658 15.6364C28.3534 15.1902 27.9412 14.8231 27.4621 14.564C26.983 14.305 26.45 14.1613 25.9056 14.1442C24.7443 14.0223 23.6185 14.8391 23.0267 14.8391C22.4235 14.8391 21.5123 14.1563 20.5312 14.1765C19.8966 14.197 19.2781 14.3816 18.7359 14.7122C18.1938 15.0428 17.7466 15.5082 17.4379 16.063C16.1004 18.3787 17.098 21.7819 18.3792 23.6537C19.0202 24.5703 19.7694 25.5941 20.7497 25.5578C21.7089 25.518 22.0672 24.9461 23.225 24.9461C24.3722 24.9461 24.7083 25.5578 25.7085 25.5347C26.7378 25.518 27.3863 24.6141 28.0048 23.6888C28.4654 23.0357 28.8198 22.3139 29.0549 21.5502C28.4569 21.2972 27.9466 20.8739 27.5876 20.3329C27.2286 19.7919 27.0368 19.1571 27.0361 18.5078Z"
                fill="black"
              />
              <path
                d="M25.1476 12.913C25.7088 12.2393 25.9853 11.3733 25.9183 10.499C25.0609 10.5891 24.2689 10.9989 23.7001 11.6468C23.422 11.9633 23.209 12.3315 23.0732 12.7303C22.9375 13.1292 22.8818 13.5509 22.9091 13.9714C23.338 13.9758 23.7623 13.8828 24.15 13.6995C24.5377 13.5162 24.8788 13.2473 25.1476 12.913Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
