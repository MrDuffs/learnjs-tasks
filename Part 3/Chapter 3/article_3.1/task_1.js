let url = 'https://api.github.com/users';

async function getUsers(names) {
    let requests = names.map((user) => {
    return fetch(`${url}/${user}`)
        .then(response => response.ok ? response.json() : null);
    });

    return await Promise.all(requests);
}