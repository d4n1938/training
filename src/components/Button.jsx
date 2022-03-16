import React, { useState } from "react";

export default function Button() {
  const [counter,setCounter] = useState(0)
  return <button onClick={() => {
    setCounter(prevCount => prevCount + 1)
  }}>{counter}</button>;
}
