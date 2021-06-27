import React, { useState } from 'react'
import Styled from 'styled-components'

import Row1 from './simComponents/Row1'
import Row2 from './simComponents/Row2'
import Row3 from './simComponents/Row3'

const SimWrapper = Styled.div`
    position: relative;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export default function Sim() {
    const [health, changeHealth] = useState(100)

    function handleHealth(amt) {
        changeHealth(health - amt)
    }

    return (
        <SimWrapper style={{ minHeight: window.innerHeight }}>
            <Row1 health={health} />
            <Row2 />
            <Row3 manageHealth={handleHealth} />
        </SimWrapper>
    )
}
