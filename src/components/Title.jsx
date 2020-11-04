import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.title`
    font-size: 4rem;
`

export default function Title() {
    return (
       <h2 className={styled.title}>Login</h2>
    )
}
