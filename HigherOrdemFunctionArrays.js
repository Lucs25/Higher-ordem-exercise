/*
//Higher Order Function Imbutida no JS

//Método 'MAP' - retorno a mesma qtd de item do array anterior, porém transformado

const numbers = [1 ,2 ,3]

const squareNumbers = numbers.map(item => item **2)

console.log(squareNumbers)
-------------------------------------------
*/

/*
//Método intermediário

const nameView = [
    {name: 'João', sobrenome: 'Felipe'},
    {name: 'Maria', sobrenome: 'Luiz'},
    {name: 'Pedro', sobrenome: 'Menezes'},
]

const showsName = nameView.map(({name}) => name)

//Exibe as informações em forma de tabela
console.table(showsName)
------------------------------------------------
*/

/*
//Método Filter - Obter apenas alguns itens do array anterior de acordo com determinada

const randomNumber = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

const numberGreaterThanSixty = randomNumber.filter(cont => cont > 60)

console.log(numberGreaterThanSixty) 
-----------------------------------------------
*/

/*
const nameView = [
    {name: 'João', sobrenome: 'Felipe', nasceu:2000},
    {name: 'Maria', sobrenome: 'Luiz', nasceu:2010},
    {name: 'Pedro', sobrenome: 'Menezes', nasceu: 2020},
]

const nascimento = nameView.filter(({nasceu}) => nasceu > 2005)

console.table(nascimento)
------------------------------------------------
*/

/*
const consultName = [
    'Lucas',
    'Felipe',
    'João',
    'Matheus',
]

const checkName = ['Lucas','Matheus','Joaquim']

const commonName = checkName.filter(name => consultName.includes(name))

console.log(commonName)
------------------------------------------------
*/

//Método reduce - Reduz o arrya a algum tipo de dado





