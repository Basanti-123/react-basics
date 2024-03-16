import { useState } from "react";
export const Question = () =>  {
  const [Country, setCountry] = useState("")
   const data = [
      {Country: "Nepal", cities: ["Kathmandu", "Bharatpur", "Pokhara"]},
      {Country: "India", cities: ["New Delhi", "Banglore"]},
    ];
    // Question: use the above data to create a dropwodn filter
    // First: we will select the country
    // Second: Based on the option we Chose the cities option should appears
    
  
    return (
    <div>
<select onChange={(e)=> setCountry(e.target.value)}>
  <option value="">Select Country</option>
  {data.length>0 && 
  data.map((d, index) => {
    return <option key={index} value={d?.Country}>{d?.Country}</option>
  })
  }
</select>
{Country && (
  <select>
  <option value="">Select City</option>
  {data.filter(data=> data.Country === Country).pop().cities.map((city)=> {
    return (
      <option key={city} value={{city}}>{city}</option>
    )
  })}
  
</select>
)}
    </div>
  )
}


