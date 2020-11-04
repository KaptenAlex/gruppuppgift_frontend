import React from 'react'
import styled from 'styled-components';

const StyledUserInformation = styled.div`
    width max-content;
    padding: 30px;
    margin-left: auto;
    margin-right: 3%;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.50) 0px 3px 8px;

`;
export default function SignedInContainer(props) {
    return (
        <StyledUserInformation>
            <h3 className="mb-3">User information</h3>
            <p>Email: <span>{props.signedInUser.email}</span></p>
            <p>Förnamn: <span>{props.signedInUser.firstName}</span></p>
            <p>Efternamn: <span>{props.signedInUser.lastName}</span></p>
        </StyledUserInformation>
    )
}
