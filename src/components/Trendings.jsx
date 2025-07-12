const TrendW = () => {

    const products=[{
        name:'New Balance 9060(Burgundy)',
        price:2500,
        img:'/product/shoes/s (8).webp',
        link:'https://wa.link/6tztkq'
    },
    {
        name:'Nike JumpMan MVP Black',
        price:2500,
        img:'/product/shoes/s (17).webp',
        link:'https://wa.link/b1ckic'
    },
    {
        name:'Air Jordan 1 Chicago',
        price:2500,
        img:'/product/shoes/s (18).webp',
        link:'https://wa.link/nt7ezl'
    },
    {
        name:'Nike Air Force Ambush coffee milk',
        price:2500,
        img:'/product/shoes/s (26).webp',
        link:'https://wa.link/uvgib9'
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

export default TrendW;