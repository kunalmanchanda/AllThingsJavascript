import { filter, orderBy, remove, without } from "lodash";

var arrW = without([1, 2, 3, 4, 5, 6, 7, 8, 9], 3, 9, 2, 1);

console.log(arrW);

var initialArr = [
  { id: 1, firstName: "John", isActive: true },
  { id: 2, firstName: "Jack", isActive: false },
];

var res = remove(initialArr, (user) => user.id === 1)

res

initialArr

var activeUsers = remove(initialArr, {isActive: false})

activeUsers

initialArr

var users = [
    { 
        id: 1, 
        name: 'John',
        isActive: true,
        likes: 110
    },
    { 
        id: 2, 
        name: 'Mike',
        isActive: true,
        likes: 140
    },
    { 
        id: 3, 
        name: 'Jack',
        isActive: true,
        likes: 30
    }  
];

let popular = filter(users, {isActive: true});

popular

var sortedUsers = users.sort((u1, u2) => u1.likes < u2.likes ? -1 : 1);

sortedUsers

var sorted = orderBy(users, ['likes', 'name'], ['desc', 'asc']);

sorted

