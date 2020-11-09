const ROOT_URL = 'https://frebi.willandskill.eu/';

export default class {
    setSessionToken(token) {
        localStorage.setItem('token', token);
    }

    getSessionToken() {
        return localStorage.getItem('token');
    }
}
