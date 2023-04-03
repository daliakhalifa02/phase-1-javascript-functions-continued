function saturdayFun (activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
// console.log(saturdayFun("go to the beach"))

const mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}
// console.log(mondayWork("drink coffee"))


function wrapAdjective(char = "*"){
    return function result(emphatic = "a hard worker"){
        return `You are ${char}${emphatic}${char}!`
    }
}
// console.log(wrapAdjective('||')('a dedicated programmer'))