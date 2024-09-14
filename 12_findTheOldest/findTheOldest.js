const findTheOldest = function(people) {
    let maxAge = 0;
    let ages = {};
    for(person of people){
        if(!person.yearOfDeath){
            person.yearOfDeath = new Date().getFullYear()
        }
        age = person["yearOfDeath"] - person["yearOfBirth"];
        ages[age] = person["name"];
        if(age > maxAge){
            maxAge = age;
        }
    }
        let answer = people.filter(person =>{
            return person.name === ages[maxAge]
        })
    return answer[0]
};

// Do not edit below this line
module.exports = findTheOldest;
