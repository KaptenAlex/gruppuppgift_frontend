const ROOT_URL = 'https://frebi.willandskill.eu/';
const LOGIN_URL = `${ROOT_URL}api-token-auth/`;

export default class {
    setSessionToken(token) {
        localStorage.setItem('token', token);
    }

    getSessionToken() {
        return localStorage.getItem('token');
    }
}
