import Styled from 'styled-components'

const ButtonWrapper = Styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    position: absolute;
    bottom: 20px;
`
const Button = Styled.div`
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border: 1px solid white;
    color: white;
    margin: 10px;
    cursor: pointer;
    /* flex: 1; */
`

const Buttons = () => {
    return (
        <ButtonWrapper>
            <a
                href="mailto:phelps.justen@gmail.com"
                target="_blank"
                rel="no noreferrer"
            >
                <Button>Email</Button>
            </a>
            <a
                href="https://www.linkedin.com/in/justen-phelps/"
                target="_blank"
                rel="no noreferrer"
            >
                <Button>LinkedIn</Button>
            </a>
            <a href="/docs/resume.pdf" target="_blank" rel="no noreferrer">
                <Button>Resume</Button>
            </a>
        </ButtonWrapper>
    )
}

export default Buttons
