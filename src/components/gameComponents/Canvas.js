import React, { useState } from 'react'
import Styled from 'styled-components'
import { Canvas } from '@react-three/fiber'
import { useSpring, animated } from '@react-spring/three'

const Wrapper = Styled.div`
    height: 600px;
    width: 100%;
`

const CanvasWrapper = () => {
    const myMesh = React.useRef()
    const [active, setActive] = useState(false)
    const { scale } = useSpring({ scale: active ? 1.5 : 1 })

    return (
        <Wrapper>
            <Canvas>
                <ambientLight intensity={0.1} />
                <directionalLight color="blue" position={[0, 0, 5]} />
                <animated.mesh
                    scale={scale}
                    onClick={() => setActive(!active)}
                    ref={myMesh}
                >
                    <boxGeometry />
                    <meshPhongMaterial color="royalblue" />
                </animated.mesh>
            </Canvas>
        </Wrapper>
    )
}

export default CanvasWrapper
