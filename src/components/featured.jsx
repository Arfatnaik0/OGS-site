import TrendS from "./Trendings";
import TrendW from "./Trendingw";

const Featured = () => {
  return (
    <>
    <div className="flex content-center mt-15 mb-3">
      <h1 className="text-2xl indent-7 underline underline-offset-4 decoration-amber-300">Trending Watches</h1>
    </div>
    <TrendW/>
    <div className="flex content-center mt-15 mb-3">
      <h1 className="text-2xl indent-7 underline underline-offset-4 decoration-amber-300">Trending Shoes</h1>
    </div>
    <TrendS/>
    </>
  );
};

export default Featured;