export const setTokenToLocalStorage = (token) => {
    localStorage.setItem('user', JSON.stringify(token));
};

export const getTokenFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('user')) || false;
}