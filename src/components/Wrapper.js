import Styled from 'styled-components'

import TopBar from './gameComponents/TopBar'
import Hero from './Hero'
import Buttons from './Buttons'

const GameWrapper = Styled.div`
    position: relative;
    min-height: 100vh;
    width: 100%;
`

const Wrapper = () => {
    return (
        <GameWrapper>
            <TopBar />
            <Hero />
            <Buttons />
        </GameWrapper>
    )
}

export default Wrapper
