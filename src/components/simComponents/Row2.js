import Styled, { keyframes } from 'styled-components'
import { Progress } from 'antd'
import { pulse } from 'react-animations'
const pulseAnimation = keyframes`${pulse}`

const RowWrapper = Styled.div`
    min-height: 300px;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-between;
    @media (max-width: 768px) {
        width: 100%;
        padding: 20px;
    }
`
const CharBox = Styled.div`
    max-width: 768px;
    height: 75px;
    padding: 10px;
    border: 5px double white;
    display: flex;
    flex-grow: 1;
    flex-basis: 300px;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

const TextRow = Styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
`

const HealthBar = Styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const CharAvatar = Styled.div`
    max-height: 200px;
    width: 400px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: 3s ${pulseAnimation};
    animation-iteration-count: 100;
    @media (max-width: 768px) {
        width: 100%;
        padding: 40px 0;
        margin: 10px 0;
        justify-content: flex-start;
    }
`

export default function Row2() {
    return (
        <RowWrapper>
            <CharAvatar>
                <img
                    src="/images/backsprite.png"
                    alt="opponent"
                    style={{ maxHeight: '200px' }}
                />
            </CharAvatar>
            <CharBox>
                <TextRow>
                    <span style={{ color: '#75bffe' }}>You</span>{' '}
                    <span>lv.100</span>
                </TextRow>
                <HealthBar>
                    {' '}
                    <Progress showInfo={false} percent={100} />
                </HealthBar>
            </CharBox>
        </RowWrapper>
    )
}
