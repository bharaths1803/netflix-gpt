import React, { useEffect, useMemo, useRef, useState } from "react";
import { nThPrime } from "../utils/helper";
import { Link } from "react-router-dom";

// const Demo = () => {
//   const [text, setText] = useState(0);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const prime = useMemo(() => nThPrime(text), [text]);

//   // const findPrime = () => nThPrime(text);

//   return (
//     <div
//       className={`w-96 h-96 m-2 p-4 border border-black ${
//         isDarkMode ? "bg-gray-900 text-white" : ""
//       }`}
//     >
//       <button
//         className="bg-gray-200 p-2"
//         onClick={() => setIsDarkMode(!isDarkMode)}
//       >
//         Toggle
//       </button>
//       <input
//         className="border border-black"
//         type="number"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <h1 className="text-xl font-bold">nth prime is {prime}</h1>
//     </div>
//   );
// };

const Demo = () => {
  const refX = useRef(1);
  const [stateX, setStateX] = useState(1);
  const x = useRef(null);

  useEffect(() => {
    if (x.current) return;
    x.current = setInterval(() => {
      console.log("Namaste react", Math.random());
    }, 1000);
  }, []);

  return (
    <div className={`w-96 h-96 m-2 p-4 border border-black`}>
      {/* <div>
        <button
          className="bg-gray-200 p-2"
          onClick={() => {
            x = x + 1;
            console.log("Changin let x variable", x);
          }}
        >
          Increase let x
        </button>
        <h1 className="text-xl font-bold">Let X Value is {x}</h1>
      </div> */}
      <div>
        <button
          className="bg-gray-200 p-2"
          onClick={() => {
            refX.current = refX.current + 1;
            console.log("Changin ref x variable", refX.current);
          }}
        >
          Increase ref x
        </button>
        <h1 className="text-xl font-bold">Ref X Value is {refX.current}</h1>
      </div>
      <div>
        <button
          className="bg-gray-200 p-2"
          onClick={() => {
            setStateX(stateX + 1);
            console.log("Changin state x variable", stateX);
          }}
        >
          Increase State x
        </button>
        <h1 className="text-xl font-bold">State X Value is {stateX}</h1>
      </div>
      <div>
        <Link to={"/"}>
          <button className="bg-gray-200 p-2">Login</button>
        </Link>
      </div>
      <div>
        <button
          className="bg-gray-200 p-2"
          onClick={() => clearInterval(x.current)}
        >
          Stop Interval
        </button>
      </div>
    </div>
  );
};

export default Demo;
