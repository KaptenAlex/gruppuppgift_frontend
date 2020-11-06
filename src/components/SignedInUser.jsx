import React, { useState, useEffect } from 'react'
import UserDatakit from '../data/UserDatakit';
import SignedInContainer from './SignedInContainer';

export default function SignedInUser() {
    const [signedInUser, setSignedInUser] = useState(null);

    const ROOT_URL = 'https://frebi.willandskill.eu/';
    const ME_URL = `${ROOT_URL}api/v1/me`;

    const userDataKit = new UserDatakit();

    useEffect(() => {
        if (userDataKit.getSessionToken() !== null) {
            fetchSignedInUser();
        }
    }, [])



    function fetchSignedInUser() {
        fetch(ME_URL, {
            headers: {
                'Authorization': `Bearer ${userDataKit.getSessionToken()}`
            }
        })
            .then(res => res.json())
            .then(data => {
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
