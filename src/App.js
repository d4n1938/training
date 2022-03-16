import { useState } from "react";
import "./App.css";
import { useTransition, animated, useSpring } from "react-spring";
import Button from "./components/Button";
import TransitionArray from "./components/TransitionArray";
import LoopTrue from "./components/LoopTrue";
import { StartMenu } from "./components/StartMenu";
import HelloAnimation from "./components/HelloAnimation";
import TextAnimation from "./components/TextAnimation";

const App = () => {

  return(
  <>
   {/* <Button /> */}
   <LoopTrue/>
   <TextAnimation />
   <StartMenu/>
   {/* <HelloAnimation /> */}
  </>
  )}
export default App;
