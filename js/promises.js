function getGithubUsernames(name) {
    if (name !== '') {
        let plugin = `/${name}`
        return fetch(`https://api.github.com/users${plugin}`, {
            headers: {
                'Authorization': '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'
            }
        })
            .then(response => {
                return response.json()
            })
    } else{
        return fetch(`https://api.github.com/users`, {
            headers: {
                'Authorization': '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'
            }
        })
            .then(response => {
                return response.json()
            })
    }
};
getGithubUsernames('rileywood9984').then(user => {
    console.log(user)
    fetch("https://api.github.com/users/"+user.login+"/events{/privacy}", {
        headers: {
            'Authorization': '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'
        }
    }).then(response=>{
        return response.json()}).then(userObj=>{
        console.log(userObj)
        })

    })
    .catch(error => console.error(error));
