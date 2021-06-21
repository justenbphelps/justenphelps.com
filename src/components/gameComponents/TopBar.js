import Styled from 'styled-components'

const TopBarWrapper = Styled.div`
    width: 100%;
    padding: 10px 20px;
    box-sizing: border-box;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Health = Styled.span`
    color: lightgreen;
`

const Icon = Styled.img`
    width: 25px;
`

const Score = Styled.span`
    color: white;
`

const TopBar = () => {
    const today = new Date().toDateString()

    return (
        <TopBarWrapper>
            <Health className="topBar-text">Justen Phelps</Health>
            <Icon src="/images/jp.png" />
            <Score className="topBar-text">{today}</Score>
        </TopBarWrapper>
    )
}

export default TopBar
