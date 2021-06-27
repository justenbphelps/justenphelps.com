import Styled, { keyframes } from 'styled-components'
import { pulse } from 'react-animations'
import { Progress } from 'antd'
const pulseAnimation = keyframes`${pulse}`

const RowWrapper = Styled.div`
    min-height: 300px;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
`
const OppBox = Styled.div`
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
    align-self: flex-start;
`

const OppAvatar = Styled.div`
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
        padding: 20px 0;
        justify-content: flex-end;
    }
`

export default function Row1(props) {
    return (
        <RowWrapper>
            <OppBox>
                <TextRow>
                    <span style={{ color: '#b98eff' }}>Justen Phelps</span>
                    <span>lv.29</span>
                </TextRow>
                <HealthBar>
                    <Progress
                        showInfo={false}
                        percent={props.health > 0 ? props.health : 0}
                    />
                </HealthBar>
            </OppBox>
            <OppAvatar>
                <img
                    src="/images/opp.png"
                    alt="opponent"
                    style={{ maxHeight: '200px' }}
                />
            </OppAvatar>
        </RowWrapper>
    )
}
