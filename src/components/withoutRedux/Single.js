import { useEffect, useState } from "react";

function Timer({max}){
const [count, setCount] = useState(0);


  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };
  return (
    <div className="app">
      <button onClick={incrementCount}> + </button>
      <input type="text" value={count} onChange={this.handleChange} />
      <button onClick={decrementCount}> - </button>
    </div>
  );
}
    



export default Timer;