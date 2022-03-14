import React, { useState } from "react";
import { useTransition ,animated, config} from "react-spring";
import Button from "./Button";


export const StartMenu = () => {
  const [items,setItems] = useState([]);
  const transiton = useTransition(items,{
    from:{x:-100,y:800,opasity:0 ,width:20,height:20},

    enter:item => async(next) =>{
      await next({y:item.y,opasity:1,delay:item.delay});
      await next({x:0,width:600,height:100});
    },
    leave:item => async(next) =>{
      await next({width:20,delay:item.out});
      await next({y:800,opasity:0});
    },
  });
  return (
    <div className="App">
      <button onClick={()=>{
        setItems(v=> v.length ? []:[
          {y:0, delay:0,out:400},
          {y:50, delay:200,out:200},
          {y:100, delay:400,out:0}
        ])
      }}>
        mount
      </button>
      <div className="container">
        {/* {isVisible ?<div className="item" />:''} */}
        {transiton((style,item)=>
          item ? <animated.div style={style} className='item' />:''
        )}
      </div>
    </div>
  );
};
