import React from 'react'
import styled from "styled-components"
import { animated , useSpring} from 'react-spring'


export default function FadeinProto() {

  const animation = useSpring({
    from: {width:3 ,height:0, color:'red', backgroundColor:'black' , margin: '0 auto'},
    to: [
      // {width:window.innerWidth , color:'red'},
      // {y:-20},
      // {y:0},
      {height:600 , color:'green' , backgroundColor:'blue'},
      {width:window.innerWidth , color:'blue' , backgroundColor:'green'},
    ],
 
    config: { duration: 800 },
  })


  return (
    <animated.div style={animation}>
    <Div>
      oubiubiu
    </Div>
    </animated.div>
  )
}
  const Div = styled.div`
  width: 100px;
  margin: 0 auto;
  background-color: red;
  `
