import {useState, useEffect} from 'react'
import useFetch from '../Hooks/useFetch';

export const ProductCall = ({id}) => {
   const {data, error, loading} = useFetch(`https://dummyjson.com/products/${id}`);
   if (error) {
    return<>error</>;
   }
    return <>{loading? <>Loading</>:<>{data?.title}</>}</>;
  
};

export const UserCall = ({id}) => {
    const [data, setData] = useState({});
   useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const getData = async()=> {
    const result = await fetch(`https://dummyjson.com/users/${id}`,{
        signal,
    }
    );
    const res = await result.json();
    setData(res);
    };
    getData();
    return () => {
        controller.abort();
    }
   
   }, [id])


    return <>{data.username}</>;
  
}


