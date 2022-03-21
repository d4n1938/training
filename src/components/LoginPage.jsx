import React from 'react'
import { useSpring ,animated} from 'react-spring'
import styled from 'styled-components'

export default function LoginPage() {

  const animation = useSpring({
    from: {y:-100},
    to: [
      {y:0},
      // {y:-20},
      // {y:0},
    ],
    config: { duration: 1000 },
  })


  return (
    <animated.div style={animation}>
    <Wrapper>
      <StyleDiv></StyleDiv>
      <Content>LoginPage</Content>
    </Wrapper>
    </animated.div>
  )
}

const Wrapper = styled.div`
position: relative;
  width: 200px;
margin: 0 auto;
display: flex;
justify-content: center;
`

const StyleDiv = styled.div`
  position: absolute;
  width: 0;
  border-top: solid 300px snow;
  border-left: solid 100px snow;
  border-right: solid 100px snow;
  border-bottom: solid 100px transparent;
  /* transform: translateX(30px); */
  z-index: 10;
`
const Content = styled.p`
  position: absolute;
  z-index: 100;
`