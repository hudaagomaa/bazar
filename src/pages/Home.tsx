import Banner from '@/components/Banner';
import Products from '@/components/Products';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';


export default function Home() {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    setProducts(data.data);
  }, [data]);

  
  return (
    <div>
      <Banner/>
      <Products products={products} />
    </div>
  );
};


  // const data = useLoaderData();

  // const [product , setProducts] = useState([]);
  // useEffect(()=>{
  //   setProducts(data.data);
  // } ,[data])
