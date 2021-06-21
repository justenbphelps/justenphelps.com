import Styled from 'styled-components'
import Typewriter from 'typewriter-effect'

const LoaderWrapper = Styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    align-items: center;
    justify-content: center;
`

const Sprite = Styled.img`
    margin-bottom: 40px;
`

const Loader = (props) => {
    return (
        <LoaderWrapper
            className={props.loading ? 'loader' : 'loader invisible'}
        >
            <Sprite src="/images/jp.png" alt="sprite" />
            <br />
            <Typewriter
                options={{
                    delay: 100,
                }}
                onInit={(typewriter) => {
                    typewriter
                        .typeString('Press enter to continue')
                        .pauseFor(2500)
                        .start()
                }}
            />
        </LoaderWrapper>
    )
}

export default Loader
