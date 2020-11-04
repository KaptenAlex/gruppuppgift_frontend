import React, { useState, useEffect } from 'react'
import SignedInContainer from './SignedInContainer';

export default function SignedInUser() {

    const [signedInUser, setSignedInUser] = useState(null)
    const ROOT_URL = 'https://frebi.willandskill.eu/';
    const ME_URL = `${ROOT_URL}api/v1/me`;

    useEffect(() => {
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
        <>
            {signedInUser && (
                <SignedInContainer signedInUser={signedInUser} />
            )}
        </>
    )
}
