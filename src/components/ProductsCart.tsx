import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

type Product = {
  title: string;
  oldPrice: number;
  price: number;
  category: string;
  image: string;
  isNew?: boolean; // لأن بعض المنتجات قد لا تحتوي على isNew
};
export default function ProductsCart({ product }: { product: Product }) {
  const navigate = useNavigate();
  const _id = product.title;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };

  const rootId = idString(_id);
  
  const handleDetails = () => {
    navigate(`product/${rootId}` ,{
      state:{
        item: product,
      }
    }

    )
  };

  return (
    <div onClick={handleDetails} className="group relative">
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
              {product.title ? product.title.substring(0, 15) : "No Title"}
            </h1>
          </div>
          <div className="text-sm relative w-28 flex justify-end overflow-hidden">
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
        <div className="categ">
          <p> {product.category}</p>
        </div>
        <div className="sale absolute top-4 right-0">
          {product.isNew && (
            <p className="bg-black text-white py-2 px-6 font-titleFont font-semibold">
              Sale
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
