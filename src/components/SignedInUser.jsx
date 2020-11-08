import React, { useState, useEffect, useContext } from 'react';
import UserDatakit from '../data/UserDatakit';
import SignedInContainer from './SignedInContainer';
import UserContext from '../contexts/userContext';

export default function SignedInUser() {
  const [signedInUser, setSignedInUser] = useState(null);
  const { setCurrentUser } = useContext(UserContext);

  const ROOT_URL = 'https://frebi.willandskill.eu/';
  const ME_URL = `${ROOT_URL}api/v1/me`;

  const userDataKit = new UserDatakit();

  useEffect(() => {
    if (userDataKit.getSessionToken() !== null) {
      fetchSignedInUser();
    }
  }, []);

  function fetchSignedInUser() {
    fetch(ME_URL, {
      headers: {
        Authorization: `Bearer ${userDataKit.getSessionToken()}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setSignedInUser(data);
        setCurrentUser(data);
      });
  }

  return (
    <>{signedInUser && <SignedInContainer signedInUser={signedInUser} />}</>
  );
}
