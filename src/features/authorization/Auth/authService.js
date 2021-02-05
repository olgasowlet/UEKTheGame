const loginUser = (body) => {
    return (
        fetch("http://127.0.0.1:8000/api/token/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(response => {
                if (response.status === 401) {
                    throw new Error('Network response was not ok');
                } else {
                    return response.json()
                };       
            })
            .catch(error => console.log(error))
    )
};

const registerUser = (body) => {
    return (
        fetch("http://127.0.0.1:8000/auth/api/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(response => response.json())
    )
};

const logout = () => {
    localStorage.removeItem('user');
}


export { loginUser, registerUser, logout };