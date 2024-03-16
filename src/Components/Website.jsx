import { useEffect, useState } from "react"

export const Website = () => {
    const [products, setProducts] = useState([]);
    const[Pagination, setPagination] = useState({});

    useEffect(() => {
        const getProducts = async () => {
        const response = await fetch("https://dummyjson.com/products?limit=5");
        const result = await response.json();
     const {products, limit, skip, total} = result;
     setProducts(products);
     setPagination({limit, skip, total});
        };
        getProducts();
       
    }, []);

  return(
     <>
     {products.length >0 ?(
     <ol>
    {products.map((product)=> {
            return<li key={product?.id}>{product.title}</li>;
        })}
    
  </ol> 
 ):(
   <>No Product found!!</>
)}
</>
);
  };

