import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return <Incrementor />;
}

export default App;
//this wont work as we expected --usestate
// const Incrementor = () => {
//   let count = 0;

//   const clickHandler = () => {
//     count = count + 1;
//     console.log(count);
//   };

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button type="button" onClick={clickHandler}>
//         click me to increase
//       </button>
//     </div>
//   );
// };

//this works as we epected --use state
const Incrementor = () => {
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button type="button" onClick={clickHandler}>
        click me to increase
      </button>
    </div>
  );
};