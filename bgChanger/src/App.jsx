// import { useState } from "react";


// const App = () => {

//   const [color, setColor] = useState("olive");

//   return (
//     <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
//       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
//         <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
//           <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//             style={{ backgroundColor: "red" }} onClick={() => setColor("red")}>
//             Red
//           </button>
//           <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//             style={{ backgroundColor: "green" }} onClick={() => setColor("green")}>
//             Green
//           </button>
//           <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//             style={{ backgroundColor: "blue" }} onClick={() => setColor("blue")}>
//             Blue
//           </button>
//           <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//             style={{ backgroundColor: "olive" }} onClick={() => setColor("olive")}>
//             Olive
//           </button>
//           <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//             style={{ backgroundColor: "gray" }} onClick={() => setColor("gray")}>
//             Gray
//           </button>
//           <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
//             style={{ backgroundColor: "yellow" }} onClick={() => setColor("yellow")}>
//             Yellow
//           </button>
//           <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//             style={{ backgroundColor: "pink" }} onClick={() => setColor("pink")}>
//             Pink
//           </button>
//           <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//             style={{ backgroundColor: "purple" }} onClick={() => setColor("purple")}>
//             Purple
//           </button>
//           <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
//             style={{ backgroundColor: "lavender" }} onClick={() => setColor("lavender")}>
//             Lavender
//           </button>
//           <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
//             style={{ backgroundColor: "white" }} onClick={() => setColor("white")}>
//             White
//           </button>
//           <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//             style={{ backgroundColor: "black" }} onClick={() => setColor("black")}>
//             Black
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// };

// export default App;

// -----------------------------------------------------


import { useState } from "react";
import { MdNightlight } from "react-icons/md";
import { PiSunFill } from "react-icons/pi";


const App = () => {

  const [bgcolor, setBgColor] = useState("white");
  const [light, setDark] = useState("white");

  const handleToggle = () => {
    setDark((light) => {
      return !light;
    })
  };

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: bgcolor }}>
      <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={handleToggle}>
            {light ?
              <PiSunFill style={{ width: "25px", height: "25px" }} onClick={() => setBgColor("black")} />
              : <MdNightlight style={{ width: "25px", height: "25px" }} onClick={() => setBgColor("white")} />
            }
          </button>

        </div>
      </div>
    </div>
  )
};

export default App;
