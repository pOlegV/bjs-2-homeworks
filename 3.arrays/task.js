function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((number, item) => number === arr2[item]);
}

function getUsersNamesInAgeRange(users, gender) {
    if (users instanceof Array && users.length > 0 && (gender === "мужской" || gender === "женский")){
        let allAge = users.filter(user => user.gender === gender).map(ages => ages.age);
        let average = allAge.reduce((age, item) => age + item) / allAge.length;
       return  average;
    }else {
        return 0;
    }
    
}