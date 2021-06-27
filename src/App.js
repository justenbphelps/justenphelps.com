import { useState } from 'react'
import Styled from 'styled-components'

// Components
import Loader from './components/Loader'
import Sim from './components/Sim'

const AppWrapper = Styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #000000;
  color: #fafafa;
  position: relative;
`

const App = () => {
    const [loading, setLoading] = useState(true) // set true for release

    function listener(e) {
        if (e.code === 'Enter' || e.type === 'touchstart') {
            setLoading(false)
        }
    }
    document.addEventListener('keydown', listener)
    document.addEventListener('touchstart', listener)

    return (
        <AppWrapper>
            <Loader loading={loading} />
            {loading ? null : <Sim />}
        </AppWrapper>
    )
}

export default App
