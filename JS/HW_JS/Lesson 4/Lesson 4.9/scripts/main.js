function foobar(users){
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
    }
}

foobar([
    {'id': 1, 'name': 'Sveta', 'age': 11},
    {'id': 2, 'name': 'Alex', 'age': 21},
    {'id': 3, 'name': 'Jack', 'age': 31},
    {'id': 4, 'name': 'Kevin', 'age': 41},
    {'id': 5, 'name': 'Georg', 'age': 51},
]);

