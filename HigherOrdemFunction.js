/* primeiro método
//método iniciante

function double (aNumber){
    return aNumber * 2
}
function double (aNumber){
    return aNumber * 3
}
function double (aNumber){
    return aNumber * 4
}

console.log(double(9)) 

----------------------------------------------
*/
/*
//método intermediário
//atribuindo função a uma função
function getMultiplier (multiplayer) {
    return function (aNumber) {
        return aNumber * multiplayer
    }
}

//atribuindo função a uma variável
const double = getMultiplier(2)
const triple = getMultiplier(3)
const quadruple = getMultiplier(4)

console.log(triple(11))
------------------------------------------------
*/

//método avançado - refatoração
const getMultiplier = multiplayer => aNumber => aNumber * multiplayer

const double = getMultiplier(2)
const triple = getMultiplier(3)
const quadruple = getMultiplier(4)

console.log(triple(11))

