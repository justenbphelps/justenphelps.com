import Styled from 'styled-components'

const NavWrapper = Styled.div`
    padding: 5px 10px;
    text-align: center;
`

const Nav = () => {
    return (
        <NavWrapper>
            <img src="images/jp.png" alt="sprite" />
        </NavWrapper>
    )
}

export default Nav
