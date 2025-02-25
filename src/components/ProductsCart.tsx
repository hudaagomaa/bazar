import { BsArrowRight } from "react-icons/bs";


export default function ProductsCart({ product }) {
  return (
    <div className="group">
      <div className="w-full h-96 overflow-hidden cursor-pointer">
        <img
          src={product.image}
          alt="ProductImage "
          className="w-full h-full object-cover
        group-hover:scale-110 duration-500"
        />
      </div>
      <div className="py-4 px-2 border-[1px] w-full">
        <div className="flex items-center  justify-between">
          <div className="">
            <h1 className="font-titleFont text-base font-bold">
              {" "}
              {product.title.substring(0, 15)}{" "}
            </h1>
          </div>
          <div  className="text-sm relative w-28 flex justify-end overflow-hidden">
            <div className="flex gap-2 transform transition-transform duration-500 group-hover:translate-x-24">
              <p className="line-through text-gray-500">${product.oldPrice}</p>
              <p className="font-semibold">${product.price}</p>
            </div>
            <p
              className="absolute z-20 w-[100px] text-gray-500
         hover:text-gray-900 flex items-center 
        gap-1 top-0 transform -translate-x-32
         transition-transform cursor-pointer duration-500 group-hover:translate-x-0"
            >
              add to cart
              <span>
                <BsArrowRight />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}











/**
 * "_id": 3,
    "title": 
    "isNew": true,
    "oldPrice": "70",
    "price": 55.99,
    "description": 
    "category": "women",
    "image": "
    "rating": 3
 */
//     "image
//      "title":
//    "category": "women",

//"oldPrice":    // "price":
//rating
