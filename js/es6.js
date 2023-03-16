const users = [
    {
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash']
    },
    {
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript']
    },
    {
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php']
    },
    {
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql']
    },
    {
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php']
    }
];

const name = 'riley';
const email = 'rjw9984@gmail.com';
const languages = ['html', 'javascript', 'css'];

users.push({
    name,
    email,
    languages
});

let emails = [];
let names = [];

const emailGather = (user = users) => emails.push(user.email);
users.forEach(emailGather)
const nameGather = (user = users) => names.push(user.name)
users.forEach(nameGather)


let developers = [];
users.forEach(function ({name,email,languages}) {
    // TODO: rewrite the code below to use object destructuring assignment
    //       note that you can also use destructuring assignment in the function
    //       parameter definition
    // const {name, email, languages} = user
    developers.push(`${name}'s email is ${email} ${name} knows ${languages.join(', ')}`);
});

let list = '<ul>';

for (let developer of developers) {
    list += `<li>${developer}</li>`;
}
;
list += '</ul>';
