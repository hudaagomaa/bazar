import { addToCart } from "@/redux/bazarSlice";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Bounce } from "react-toastify";
interface Product {
  _id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  oldPrice?: number;
  category?: string;
  isNew?: boolean;
}interface ProductCartProps {
  product: Product;
}

export default function ProductsCart({ product }: ProductCartProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const _id = product._id;
  const _id = product.title;
  const idString = (_id: number | string) => {
    return String(_id).toLowerCase().split(" ").join("");
  };

  const rootId = idString(_id);

  const handleDetails = () => {
    navigate(`product/${rootId}`, {
      state: {
        item: product,
      },
    });
  };

  return (
    <div onClick={handleDetails} className="group relative">
      <div className="w-full h-96 overflow-hidden cursor-pointer">
        <img
          src={product.image}
          alt="Product Image"
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
        />
      </div>
      <div className="py-4 px-2 border-[1px] w-full">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-titleFont text-base font-bold">
              {product.title ? product.title.substring(0, 15) : "No Title"}
            </h1>
          </div>
          <div className="text-sm relative w-28 flex justify-end overflow-hidden">
            <div className="flex gap-2 transform transition-transform duration-500 group-hover:translate-x-24">
              {product.oldPrice && (
                <p className="line-through text-gray-500">
                  ${product.oldPrice}
                </p>
              )}
              <p className="font-semibold">${product.price}</p>
            </div>
            <p
              onClick={() => {
                dispatch(
                  addToCart({
                    _id: product._id,
                    name: product.title, // استخدام name بدلًا من title ليكون متوافقًا مع Redux
                    description: product.description,
                    image: product.image,
                    price: product.price,
                    quantity: 1,
                  })
                );
                toast.success(`${product.title} added to cart`);
              }}
              className="absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-32 transition-transform cursor-pointer duration-500 group-hover:translate-x-0"
            >
              Add to cart
              <span>
                <BsArrowRight />
              </span>
            </p>
          </div>
        </div>
        {product.category && (
          <div className="categ">
            <p>{product.category}</p>
          </div>
        )}
        {product.isNew && (
          <div className="sale absolute top-4 right-0">
            <p className="bg-black text-white py-2 px-6 font-titleFont font-semibold">
              Sale
            </p>
          </div>
        )}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
}
