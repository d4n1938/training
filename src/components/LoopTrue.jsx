import { useState } from "react";
import { useSpring } from "react-spring";
import { useTransition, animated} from "react-spring";


function LoopTrue() {
  const [lo0op,setLoop] = useState(true);
  const styles = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 180 },
    config: { duration: 1000 }
  })

  return (<>
    <animated.div
      style={lo0op ? {
        width: 80,
        height: 80,
        backgroundColor: '#46e891',
        borderRadius: 16,
        ...styles,
      }
    :{
       width: 80,
        height: 80,
        backgroundColor: '#46e891',
        borderRadius: 16,
    }}
    />
    <button onClick={()=>{
      setLoop(v => !v)
      // api.stop()
    }}>
      {lo0op ? 'true':'false'}
    </button>
  </>

  )
}
export default LoopTrue;