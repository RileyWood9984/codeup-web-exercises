let randoUser;
fetch('https://api.github.com/users', {
    headers: {
        'Authorization': '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'
    }
})
    .then(response => {
        return response.json()
    }).then(users=> {
    let rando = Math.floor(Math.random() * 30)
    randoUser = (users[rando].login)
    console.log(randoUser)

    function getGithubUsernames(name) {
        return fetch(`https://api.github.com/users/${name}`, {
            headers: {
                'Authorization': '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'
            }
        })
            .then(response => {
                return response.json()
            })
    };
    getGithubUsernames(`${randoUser}`).then(user => {
        fetch("https://api.github.com/users/" + user.login + "/events", {
            headers: {
                'Authorization': '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'
            }
        }).then(response => {
            return response.json()
        }).then(userObj => {
            console.log(userObj[0].created_at)
        })

    })
        .catch(error => console.error(error));
})
//I don't understand what the exercise is asking me to do here and since we rushed through this section in less than a
// day. I'm submitting as is for now.