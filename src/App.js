import { useState } from 'react'
import Styled from 'styled-components'

// Components
import Loader from './components/Loader'
import Wrapper from './components/Wrapper'

const AppWrapper = Styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #000000;
  color: #fafafa;
  position: relative;
`

const App = () => {
    const [loading, setLoading] = useState(true) // set true for release

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false)
    //     }, 3500)
    // }, [])

    function listener(e) {
        if (e.code === 'Enter') {
            setLoading(false)
        }
    }
    document.addEventListener('keydown', listener)

    return (
        <AppWrapper>
            <Loader loading={loading} />
            {loading ? null : <Wrapper />}
        </AppWrapper>
    )
}

export default App
