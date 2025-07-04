const TrendS = () => {

    const products=[{
        name:'SABR',
        price:1500,
        img:'/product/watches/watch (3).webp',
        link:'https://wa.link/ua15iy'
    },
    {
        name:'Vacheron Constantin Historiques 222',
        price:1500,
        img:'/product/watches/watch (25).webp',
        link:'https://wa.link/ua15iy'
    },
    {
        name:'Spiderman x Fossil',
        price:1500,
        img:'/product/watches/watch (29).webp',
        link:'https://wa.link/ua15iy'
    },
    {
        name:'Casio Quartz square(white)',
        price:1500,
        img:'/product/watches/watch (17).webp',
        link:'https://wa.link/ua15iy'
    },
    ]



  return (
<div className="p-4 flex overflow-x-auto space-x-4 md:grid md:grid-cols-4 md:gap-4 md:overflow-visible md:space-x-0">
  {products.map((product, index) => (
    <div
      key={index}
      className="min-w-[80vw] md:min-w-0 md:w-full min-h-[40vh] shrink-0 rounded-xl p-4 shadow-lg bg-white"
    >
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-[30vh] md:h-[45vh] object-cover rounded-md mb-4"
      />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600">₹{product.price}</p>
      <button className="bg-[rgba(255,_213,_0,_1)] px-3 py-1 rounded-xl shadow-[4px_4px_4px_0px_rgba(0,_0,_0,_0.1)] border mt-2">
        <a href={product.link}>Buy now</a>
      </button>
    </div>
  ))}
</div>



  );
};

export default TrendS;