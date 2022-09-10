// -----------------------------------------
// CHALLENGE 1 - VARIABLES
// -----------------------------------------
// const lastName = 'Dourado'
// const first_name = 'Rodrigo'
// let Adress = 'frist street'
// console.log(Adress)
// Adress = 'main street'
// console.log(first_name, lastName)
// console.log(Adress)

// -----------------------------------------
// CHALLENGE 2 - STRINGS
// -----------------------------------------

// let street = 'Rua Comendador Araújo'
// let country = 'Brasil'
// let fullMailAddress = street + ', ' + country
// console.log(fullMailAddress)

// ---------------------------------------

// -----------------------------------------
// CHALLENGE 3 NUMBERS
// -----------------------------------------

// const score_1 = 75
// const score_2 = 32
// const score_3 = 9
// const score_total = score_1 + score_2 + score_3
// const score_average = (score_1 + score_2 + score_3) / 3

// const plates = 20
// const people = 7
// let p_p = plates - people
// p_p += 1
// const finalstep = 'Você tem ' + p_p + ' pratos disponiveis.'

// console.log(score_total)
// console.log(score_average)
// console.log(p_p)
// console.log(finalstep)

// -----------------------------------------
// CHALLENGE 4 - ARRAYS
// -----------------------------------------

// let fruits = ['maça', 'morango', 'tangerina', 27]
// fruits[3] = 'manga'
// console.log(fruits[0])
// console.log(fruits)

// -----------------------------------------
// CHALLENGE 5 - FUNCTIONS
// -----------------------------------------

// function calculadora(n1, n2) {
//   return n1 + n2
// }

// function tributos(subtotal) {
//   return subtotal * tax
// }

// const order1 = calculadora(10, 10)
// const order2 = calculadora(20, 10)
// const order3 = calculadora(30, 10)

// const tax = 1.2

// const Order1 = tributos(order1)
// const Order2 = tributos(order2)
// const Order3 = tributos(order3)

// console.log(Order1, Order2, Order3)

// -----------------------------------------
// CHALLENGE 6 - OBJECTS--------------------
// -----------------------------------------

// const car = {
//   model: 'Tesla X ',
//   year: 2022,
//   color: ['red', 'black', 'white'],
//   freeCo2: true + ' for Free CO2.',
//   hybrid: false + ' for Hybrid.',
//   start: function () {
//     console.log(
//       'Hello driver, your ' + car.model + car.year + ' is ready to drive.'
//     )
//   },
//   stop() {
//     console.log(car.model + car.year + ' going off. See ya later ma boy!')
//   },
// }

// console.log(car.freeCo2)
// console.log(car.hybrid)
// car.start()
// car.stop()

// -----------------------------------------
// CHALLENGE 7 - CONDITIONAL STATEMENTS-----
// -----------------------------------------

// const person1 = {
//   name: 'Diogo',
//   age: 26,
// }

// const person2 = {
//   name: 'Pati',
//   age: 16,
// }

// const person3 = {
//   name: 'Leo',
//   age: 'trinta',
// }

// const person = person1

// if (person.age >= 18) {
//   console.log('You are resident')
// } else if (person.age < 18) {
//   console.log('you a tourist')
// } else {
//   console.log('Get away from here, u shit red neck')
// }

// -----------------------------------------
// CHALLENGE 8 - STRINGS--------------------
// -----------------------------------------

// const pessoa = {
//   nome: 'Rodrigo',
//   sobrenome: ' Dourado',
//   idade: 24,
// }

// // const frase = `Olá, meu nome é ${pessoa.nome + pessoa.sobrenome} e eu tenho ${
// //   pessoa.idade
// // } anos de idade.`

// const frase = `Tenho ${pessoa.idade} anos de idade, meu sobrenome é${pessoa.sobrenome}, mas pode me chamar de ${pessoa.nome}.`

// const frase2 = frase.toUpperCase()

// console.log(frase2)

// function fullName(firstName, secondName) {
//   const fullName = `${firstName} ${secondName}`
//   return fullName.toUpperCase()
// }

// function fullName({ firstName, secondName }) {
//   const fullName = `${firstName} ${secondName}`
//   return fullName.toUpperCase()
// }
// console.log(fullName({ secondName: 'Dourado', firstName: 'Rodrigo' }))

// -----------------------------------------
// CHALLENGE 9 - ARRAY METHODS--------------
// -----------------------------------------
// const aluno = [
// {let names = ['bolbo', 'maria', 'joao', 'jose', 'amanda']}
// let materias = ['matematica', 'ciencias', 'geografia', 'historia', 'Ed. Fisica']
// let id = [1, 2, 3, 4, 5]
// let score = [80, 50, 95, 100, 34]
// ]

// for (let i = 0; i < names.length; i++) {
//   let estudantes = `${names[i]}, ID: ${id[i]}. Materia ${materias[i]} com nota de ${score[i]}`
//   console.log(estudantes)
// }

// ***** FOR EACH

// const pessoa = [
//   { nome: 'Rodrigo', idade: 24, cargo: 'dev junior' },
//   { nome: 'Mateus', idade: 22, cargo: 'dev senior' },
//   { nome: 'Salvio', idade: 29, cargo: 'Patrao' },
// ]

// function showId(pessoa) {
//   console.log(pessoa.nome.toUpperCase())
// }

// pessoa.forEach(showId)

// ------MAP

// const pessoa = [
//   { nome: 'Rodrigo', idade: 24, cargo: 'dev junior' },
//   { nome: 'Mateus', idade: 22, cargo: 'dev senior' },
//   { nome: 'Salvio', idade: 29, cargo: 'Patrao' },
// ]

// const idades = pessoa.map(function (person) {
//   return person.idade + 20
// })

// const profissao = pessoa.map(function (person) {
//   return (person.cargo = 'estudante')
// })

// console.log(pessoa)

// ------FILTER

// const pessoa = [
//   { nome: 'Rodrigo', idade: 24, cargo: 'dev' },
//   { nome: 'Mateus', idade: 22, cargo: 'dev' },
//   { nome: 'Salvio', idade: 29, cargo: 'Patrao' },
//   { nome: 'Marrone', idade: 35, cargo: 'Manager' },
// ]

// const novaPessoa = pessoa.filter(function (person) {
//   return person.idade <= 25
// })

// console.log(novaPessoa)

// const dev = pessoa.filter(function (person) {
//   return person.cargo == 'dev'
// })

// console.log(dev)

// ------FIND

// const pessoa = [
//   { nome: 'Rodrigo', idade: 24, cargo: 'dev', id: 1 },
//   { nome: 'Mateus', idade: 22, cargo: 'dev', id: 2 },
//   { nome: 'Salvio', idade: 29, cargo: 'Patrao', id: 3 },
//   { nome: 'Marrone', idade: 35, cargo: 'Manager', id: 4 },
// ]

// const person = pessoa.find(function (person) {
//   return person.id === 4
// })

// console.log(person)

// ----------REDUCE

// const pessoa = [
//   { nome: 'Rodrigo', idade: 24, cargo: 'dev', id: 1, salary: 1500 },
//   { nome: 'Mateus', idade: 22, cargo: 'dev', id: 2, salary: 3000 },
//   { nome: 'Salvio', idade: 29, cargo: 'Patrao', id: 3, salary: 8000 },
//   { nome: 'Marrone', idade: 35, cargo: 'Manager', id: 4, salary: 7000 },
// ]

// const total = pessoa.reduce(function (acc, curritem) {
//   console.log(`Total: ${acc}`)
//   console.log(`Atual: ${curritem.salary}`)
//   acc += curritem.salary
//   return acc
// }, 0)

// console.log(total)

// ARRAY CHALLENGE CONTINUE

// const aluno = [
//   { nome: 'Rodrigo', id: 1, nota: 80, materiaFav: 'Quim' },
//   { nome: 'Mateus', id: 2, nota: 90, materiaFav: 'Mat' },
//   { nome: 'Luis', id: 3, nota: 79, materiaFav: 'Port' },
//   { nome: 'Shayan', id: 4, nota: 60, materiaFav: 'Geo' },
//   { nome: 'Leo', id: 5, nota: 69, materiaFav: 'Ed.Fis' },
// ]
// const cargofix = aluno.map(function (updatealuno) {
//   return (updatealuno.cargo = 'estudante')
// })

// const findId = aluno.find(function (findId) {
//   return findId.id == 1
// })

// const filtro = aluno.filter(function (notaAlta) {
//   return notaAlta.nota >= 80
// })

// // console.log(filtro)

// const media =
//   aluno.reduce(function (acc, curritem) {
//     // console.log(`Total: ${acc}`)
//     // console.log(`Atual: ${curritem.nota}`)
//     acc += curritem.nota
//     return acc
//   }, 0) / aluno.length

// console.log(`Media de nota/aluno ${media} pontos.`)

// const bro = document.getElementById('h1')

// bro[0].style.color = 'blue'

// document.write(5 + 6)
for (var x = 1; x < 11; x = x + 1) {
  document.write(x)
}
