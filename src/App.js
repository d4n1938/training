import { useState } from "react";
import "./App.css";
import { useTransition, animated } from "react-spring";

function App() {
  const [isVisivle, setIsVisible] = useState(false);
  const transition = useTransition(isVisivle, {
    from: { x: -100, y: 800, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 100, y: 800, opacity: 0 },
  });
  return (
    <div className="App">
      <button
        onClick={() => {
          setIsVisible((v) => !v);
        }}
      >
        {isVisivle ? <div>un-mount</div> : <div>mount</div>}
      </button>
      <div className="container">
        {transition((style, item) =>
          item ? <animated.div style={style} className="item" /> : ""
        )}
      </div>
    </div>
  );
}

export default App;
