const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let threeOrMore = users.filter(function(user){
    if (user.languages.length >= 3){
        return user
    }
})

let userEmails = users.map(function(user){
    return user.email
})

let totalExp = users.reduce(function(accumulator,years){
    return accumulator + years.yearsOfExperience
},0)

let avgExp = totalExp/users.length

let longestEmail = userEmails.reduce(function(acc,email){
    if(acc.length>email.length){
        return acc
    } else {
        return email
    }
})