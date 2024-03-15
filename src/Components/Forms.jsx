import { useRef, useState } from "react";

export  const FormA = ()=> {
    const [data, setData] = useState({
       name: "",
       email: "",
    });
    const handleSubmit = () => {
        alert(`Your name is ${data?.name} & your email is ${data?.email}`);
    }
//console.log(data)
  return (
    <>
    
        <h2>Controlled Form</h2>
     <form onSubmit={handleSubmit}>
        <input name="name" placeholder="John Doe" onChange={(e) => {setData((preVal)=> { return{ ...preVal, name: e.target.value};
        });
        }}
         />
        <input type="email" placeholder="John@Doe" onChange={(e) => {setData((preVal)=> { return{ ...preVal, email: e.target.value};
        });
        }} />
        <button type="submit">Submit</button>
     </form>
    </>
  )
}





export const FormB = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const name = nameRef.current.value;
      const email = emailRef.current.value;
      alert(`Your name is ${name} & your email is ${email}`);
    };

    return (
      <div>
        <h2>Uncontrolled Form</h2>
        <form onSubmit= {(e) => handleSubmit(e)}>
          <input name="name" ref={nameRef} />
          <input type="email" name="email" ref={emailRef} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
   };
   
  
