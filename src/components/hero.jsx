import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
    <div className="flex items-center flex-col-reverse w-full md:flex-row md:justify-center md:pl-60 md:h-[90dvh]">
      <div className="flex justify-between items-center flex-col h-[35dvh] w-[90vw] md:w-[35vw] md:h-[55dvh]">
        <h1 className="font-extrabold text-3xl text-center md:text-5xl">
          YOUR WRIST AND FEET DESERVE THE OG TREATMENT
        </h1>
        <h3 className="font-regular text-sm text-center text-gray-500 md:text-xl md:w-[80%]">
          PRESENTING THE OGS, A PLACE WHERE YOU WILL FIND TRENDING WATCHES AND COOL KICKS AT AN AFFORDABLE PRICE
        </h3>
        <div>
          <Link
            to="/kicks"
            className="mx-3 bg-white px-8 py-4 rounded-xl shadow-[4px_4px_4px_0px_rgba(0,_0,_0,_0.1)] border-2 transition-all hover:scale-105 inline-block"
          >
            Kicks
          </Link>
          <Link
            to="/watches"
            className="mx-3 bg-[rgba(255,_213,_0,_1)] px-6 py-4 rounded-xl shadow-[4px_4px_4px_0px_rgba(0,_0,_0,_0.1)] border-2 transition-all hover:scale-105 inline-block"
          >
            Watches
          </Link>
        </div>
      </div>
      <div className="md:w-[60dvw] md:h-full">
        <img
          src="/public/Images/shoe-hero.png"
          alt="Shoe Hero"
          className="mt-15 h-[35vh] m-auto md:h-full md:overflow md:mr-100"
        />
      </div>
      
    </div>
    </div>
  );
};

export default Hero;
