import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const StyledUserInformation = styled.div`
    width 30%;
    padding: 30px;
    margin-left: auto;
    margin-right: 3%;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.50) 0px 3px 8px;
    
`;

export default function SignedInUser() {

    const [signedInUser, setSignedInUser] = useState(null)
    const ROOT_URL = 'https://frebi.willandskill.eu/';
    const ME_URL = `${ROOT_URL}api/v1/me`;

    useEffect( () => {
        fetchSignedInUser();
    }, [])

    function fetchSignedInUser() {
        fetch(ME_URL, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSignedInUser(data);
            })

    }

    return (
        <StyledUserInformation>
            {signedInUser && (
                <>
                    <h3 className="mb-3">User information</h3>
                    <p>Email: <span>{signedInUser.email}</span></p>
                    <p>Förnamn: <span>{signedInUser.firstName}</span></p>
                    <p>Efternamn: <span>{signedInUser.lastName}</span></p>
                </>
            )}
        </StyledUserInformation>
    )
}
