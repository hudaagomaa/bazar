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




export default function ProductsCart({ product }) {
  
  return (
    <div className="group">
      <div className="w-full h-96 overflow-hidden cursor-pointer">
        <img src={product.image} alt="ProductImage " className="w-full h-full object-cover
        group-hover:scale-110 duration-500"/>
      </div>
      <div className="">
        <h1> {product.title}</h1>

      </div>
    </div>
  );
}
