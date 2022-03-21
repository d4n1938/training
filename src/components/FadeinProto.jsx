import React from 'react'
import styled from "styled-components"
import { animated , useSpring} from 'react-spring'


export default function FadeinProto() {

  const animation = useSpring({
    from: {width:0 , color:'red'},
    to: [
      {width:100},
      // {y:-20},
      // {y:0},
    ],
    config: { duration: 1000 },
  })


  return (
    <animated.div style={animation}>
<Div>oubiubiu</Div>
    </animated.div>
  )
}
  const Div = styled.div`
  width: 100px;
  background-color: black;
  `
