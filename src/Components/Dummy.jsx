import { useEffect, useState } from "react";

export const Dummy =() => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(20);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getDummyData = async () => {
            const startIndex = (page-1) * limit;
            const response = await fetch(
                `https://dummyjson.com/products?skip=${startIndex}&limit=${limit}`
            );
            const {products} = await response.json();
            setProducts(products);
        };
        getDummyData();
    },[page, limit]);

  return (
<>
<h2>Pagination</h2>
<input name="page" onChange={(e) => setPage(Number(e.target.value))} />
<select onChange={(e) => setLimit(Number(e.target.value))}>
    <option value="20">20</option>
    <option value="50">50</option>
</select>

<ol>
    {products.length >0? (
        products.map((product) => <li key={product?.id}>{product?.title}</li>)
        ):(
            <NoData/>
        
    )}
</ol>
</>
   )
   
    
};


const NoData = () =>{
  return <>No Data Found </>
  
}
