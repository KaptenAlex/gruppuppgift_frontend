import React from 'react'
import styled from 'styled-components'

const StyledParagraph = styled.p`
    font-family: arial;
    font-size: 20px;
    display:flex;
    justify-content:center;
`

export default function DescText(props) {
    return (
        <StyledParagraph>
            {props.paragraph}
        </StyledParagraph>
    )
}
