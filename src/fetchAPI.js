const loginUser = (username, password) => {
    return (
        fetch("http://127.0.0.1:8000/api/token/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        }).then(response => response.json())
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


export { loginUser, registerUser };