import { useState } from "react"


const States =() => {
    const [color, setcolor] = useState("red"); // Mounting
    const [text, setText] = useState("");
  return (
    <div>
     Hi I am {color} Color
     < br />
     <input onChange={(e) => setText(e.target.value)} />
     <button onClick={() => setcolor(text)}>Turn {text}</button>                       
    </div>
  );
};

export default States
