import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";
import { addToCart } from "@/redux/bazarSlice";
import { useDispatch } from "react-redux";

interface Product {
  _id: string;
  image: string;
  isNew?: boolean;
  title: string;
  oldPrice?: number;
  price: number;
  description: string;
  category: string;
}

export default function InsideProduct() {
  const dispatch = useDispatch();
  const [detils, setDetils] = useState<Product | null>(null);
  const location = useLocation();
  const [baseQty, setBaseQty] = useState(1);

  useEffect(() => {
    if (location.state?.item) {
      setDetils(location.state.item);
    }
  }, [location]);

  if (!detils)
    return <p className="text-center my-10 text-gray-500">Loading...</p>;



  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-10 flex gap-10 justify-center">
        <div className="relative w-2/5">
          <img
            src={detils.image}
            alt="ProductImg"
            className="object-cover w-full h-[550px]"
          />
          {detils.isNew && (
            <div className="sale absolute top-4 right-0">
              <p className="bg-black text-white py-2 px-6 font-titleFont font-semibold">
                Sale
              </p>
            </div>
          )}
        </div>
        <div className="w-3/5 flex flex-col gap-12 justify-center">
          <div>
            <h1 className="text-4xl font-semibold">{detils.title}</h1>
            <div className="flex items-center gap-4 mt-4">
              {detils.oldPrice && (
                <p className="line-through text-gray-500">${detils.oldPrice}</p>
              )}
              <p className="font-semibold">${detils.price}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex text-base">
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
            </div>
            <p className="text-xs text-gray-500">(1 Customer review)</p>
          </div>
          <p className="text-base text-gray-500 mt-4">{detils.description}</p>
          <div className="flex gap-4">
            <div className="flex items-center justify-center w-52 p-3 gap-3 text-gray-600 border">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <button
                  onClick={() => setBaseQty(Math.max(1, baseQty - 1))}
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer active:bg-black"
                >
                  -
                </button>
                <span>{baseQty}</span>
                <button
                  onClick={() => setBaseQty(baseQty + 1)}
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer active:bg-black"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: detils._id,
                    title: detils.title,
                    description: detils.description,
                    image: detils.image,
                    price: detils.price,
                    quantity: baseQty,
                  })
                )
              }
              className="w-40 border bg-black text-white py-3 px-6 active:bg-gray-700"
            >
              Add to cart
            </button>
          
          </div>
          <p className="text-base text-gray-500">
            Category:{" "}
            <span className="font-medium capitalize">{detils.category}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
