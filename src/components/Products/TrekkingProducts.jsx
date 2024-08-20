import React from "react";
import { useNavigate } from "react-router-dom";

const trekkingProducts = [
  {
    name: "Trekking Backpack 50L",
    price: "$99.99",
    image:
      "https://contents.mediadecathlon.com/p1799239/k$8fad0efe1762353e37342c3d6646e301/trekking-bag-50l-easy-fit-mt-100-black.jpg?format=auto&quality=70&f=320x0",
  },
  {
    name: "Trekking Tent 2P",
    price: "$199.99",
    image:
      "https://contents.mediadecathlon.com/p2754745/k$a0d492c58b9ab1ac1edba18899c6ac2f/camping-tent-mh100-4-person.jpg?format=auto&quality=70&f=320x0",
  },
  {
    name: "Trekking Shoes",
    price: "$79.99",
    image:
      "https://contents.mediadecathlon.com/p1800648/k$d2c7256fd2c4f023334ea71328a520df/men-mid-ankle-waterproof-hiking-shoes-with-non-slip-outsole-black-mh100.jpg?format=auto&quality=70&f=320x0",
  },
  {
    name: "Sleeping Bag",
    price: "$49.99",
    image:
      "https://contents.mediadecathlon.com/p2758610/k$cda1430e3bd6eb6d0f53c7fc2af8fa47/trekking-mummy-sleeping-bag-trek-500-0c-wadding-twinnable-khaki.jpg?format=auto&quality=70&f=320x0",
  },
  {
    name: "Trekking Pole",
    price: "$29.99",
    image:
      "https://contents.mediadecathlon.com/p2700065/k$62fc4e19e235484c50fac654e08f045a/1-ultra-compact-trekking-pole-mt900-black.jpg?format=auto&quality=70&f=320x0",
  },
  {
    name: "Camping Stove",
    price: "$39.99",
    image:
      "https://contents.mediadecathlon.com/m17264812/k$f81c6b504d7bf4247a295009c2a8ae74/camp-bistro-stainless-steel-high-power-single-burner-camping-stove.jpg?format=auto&quality=70&f=320x0",
  },
  {
    name: "Trekking Hat",
    price: "$19.99",
    image:
      "https://contents.mediadecathlon.com/p2062208/k$706bccb9c433ddd0517fe19000955388/trekking-hat-mt100-green-leaf.jpg?format=auto&quality=70&f=320x0",
  },
  {
    name: "Trekking Gloves",
    price: "$24.99",
    image:
      "https://contents.mediadecathlon.com/p2582565/k$765e9f2e10e95f0de2d1d48b8062dbee/adult-mountain-trekking-fleece-gloves-mt500-black.jpg?format=auto&quality=70&f=320x0",
  },
  {
    name: "Trekking Mattress",
    price: "$59.99",
    image:
      "https://contents.mediadecathlon.com/p2583284/k$fdaf7b3852c780b076732e96050a79c8/camp-bed-for-camping-camp-bed-second-65-cm-1-person.jpg?format=auto&quality=70&f=320x0",
  },
  {
    name: "Waterproof Jacket",
    price: "$89.99",
    image:
      "https://contents.mediadecathlon.com/p1734370/k$8d162ff88eb1764aa8ebd2c41bbbbbc5/women-half-zip-rain-jacket-with-storage-pouch-burgundy-nh100.jpg?format=auto&quality=70&f=320x0",
  },
  {
    name: "Portable Lantern",
    price: "$19.99",
    image:
      "https://contents.mediadecathlon.com/m14920882/k$dc4c2f8f416186411d2736fa56bff792/ledlenser-ml4-rechargeable-lantern.jpg?format=auto&quality=70&f=320x0",
  },
  {
    name: "Trekking Shorts",
    price: "$34.99",
    image:
      "https://contents.mediadecathlon.com/p2599112/k$31f9e95a218cd43aaf41c7e4470964c9/men-stretchable-cargo-shorts-with-belt-brown-mt500.jpg?format=auto&quality=70&f=320x0",
  },
];

const TrekkingProducts = () => {
  const navigate = useNavigate();
  const handelChange = () => {
    navigate("/productDeatils");
  };
  return (
    <div className="container mx-auto px-4 py-8">
      {/* All Products Title */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-center">
          All Trekking Products
        </h1>
      </div>

      {/* Product Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 "
        onClick={handelChange}
      >
        {trekkingProducts.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              className="w-full h-48 object-cover"
              src={product.image}
              alt={product.name}
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-700 mt-2">{product.price}</p>
              <button className="bg-black text-white px-4 py-2 mt-4 w-full rounded-lg">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrekkingProducts;
