import { useState } from "react";
import "./App.css";
import { useTransition, animated, useSpring } from "react-spring";
import Button from "./components/Button";
import TransitionArray from "./components/TransitionArray";
import LoopTrue from "./components/LoopTrue";
import { StartMenu } from "./components/StartMenu";

const App = () => {
   const [flip, set] = useState(false)
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    onRest: () => set(!flip),
  })

  return(
  <>
   <animated.h1 style={props}>hello</animated.h1>
   <button>
     {flip ? 'start':'stop'}
   </button>
   <Button />
   <LoopTrue/>
   <StartMenu/>
  </>
  )}
export default App;
