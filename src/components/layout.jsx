// const Layout = ({ products }) => {
//   return (
//     <div className="grid w-[90vw] grid-cols-2 md:grid-cols-4 gap-4 mt-10 mb-10 m-auto">
//       {products.map((product, index) => (
//         <div
//           key={index}
//           className="w-full rounded-xl p-4 shadow-lg bg-white"
//         >
//           <img
//             src={product.img}
//             alt={product.name}
//             className="w-full h-[16vh] md:h-[45vh] object-cover rounded-md mb-4"
//           />
//           <h2 className="text-lg font-semibold">{product.name}</h2>
//           <p className="text-gray-600">₹{product.price}</p>
//           <a
//             href={product.link}
//             className="inline-block mt-2 bg-[rgba(255,_213,_0,_1)] px-4 py-2 rounded-xl border shadow-md"
//           >
//             Buy now
//           </a>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Layout;

import { useState } from "react";

const Layout = ({ products }) => {
  return (
    <div className="grid w-[90vw] grid-cols-2 md:grid-cols-4 gap-4 mt-10 mb-10 m-auto">
      {products.map((product, index) => {
        const [loaded, setLoaded] = useState(false);

        return (
          <div
            key={index}
            className="w-full rounded-xl p-4 shadow-lg bg-white"
          >
            {!loaded && (
              <div className="w-full h-[16vh] md:h-[45vh] bg-gray-300 animate-pulse rounded-md mb-4" />
            )}
            <img
              src={product.img}
              alt={product.name}
              onLoad={() => setLoaded(true)}
              className={`w-full h-[16vh] md:h-[45vh] object-cover rounded-md mb-4 transition-opacity duration-500 ${
                loaded ? "opacity-100" : "opacity-0 absolute"
              }`}
            />

            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">₹{product.price}</p>
            <a
              href={product.link}
              className="inline-block mt-2 bg-[rgba(255,_213,_0,_1)] px-4 py-2 rounded-xl border shadow-md"
            >
              Buy now
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Layout;
