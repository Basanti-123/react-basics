
import { useEffect, useState } from "react";
const Effect = () => {
   const [counter, setCounter] = useState(0);

//    // Return useEffect hook on evevry render
  useEffect(() => {
  const timer = setTimeout(()=> {
    setCounter(( counter) => counter + 1);
 }, 1000);
  return () => clearTimeout(timer);
  });
  
    return <>{counter}</>;
};

export default Effect;