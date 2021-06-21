import Styled from 'styled-components'
import Typewriter from 'typewriter-effect'

const HeroWrapper = Styled.div`
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`

const HeroTextContent = Styled.div`
    /* border: 1px solid red; */
    max-width: 400px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    flex: 1;
`

const Hero = () => {
    const intro =
        'Hello, my name is Justen. I am a Full-Stack developer from Los Angeles CA with 6+ years experience.'

    return (
        <HeroWrapper>
            <HeroTextContent>
                <Typewriter
                    options={{
                        delay: 40,
                        cursor: '',
                    }}
                    onInit={(typewriter) => {
                        typewriter
                            .pauseFor(500)
                            .typeString(intro)
                            .pauseFor(500)
                            .typeString('<p>Main Stack: </p>')
                            .pauseFor(1000)
                            .typeString('<p>- JavaScript/TypeScript</p>')
                            .pauseFor(1000)
                            .typeString('<p>- React</p>')
                            .pauseFor(1000)
                            .typeString('<p>- Node</p>')
                            .pauseFor(1000)
                            .typeString('<p>- GraphQL</p>')
                            .pauseFor(1000)
                            .typeString('<p>- Postgres, MySQL, BigQuery </p>')
                            .pauseFor(1000)
                            .typeString('<p>- AWS</p>')
                            .pauseFor(1000)
                            .typeString('<p>- Docker</p>')
                            .pauseFor(1000)
                            .typeString('<p>- Kubernetes</p>')
                            .pauseFor(1000)
                            .typeString('<p>- And other good stuff')
                            .start()
                    }}
                />
            </HeroTextContent>
        </HeroWrapper>
    )
}

export default Hero
