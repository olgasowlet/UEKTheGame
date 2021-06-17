const getAllQuests = () => {
    return (
        fetch('http://127.0.0.1:8000/quests/')
            .then(resp => resp.json())
            .then(data => console.log(data))
    )
};

export { getAllQuests };