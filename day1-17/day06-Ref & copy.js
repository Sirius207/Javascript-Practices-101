const players = ['a', 'b', 'c', 'd']
const team = players                      // ref
const team2 = players.slice()             // copy

const team3 = [].concat(players)          // copy
const team4 = [...players]                // copy

print()

team[3] = 'change from team'
team4[3] = 'change from team4'

const team5 = Array.from(players)

team5[3] = 'change from team5'

print() // Both change d to e !!

function print () {
  console.log('-------------------')
  console.log(players, team)
  console.log('2: ' + team2)
  console.log('3: ' + team3)
  console.log('4: ' + team4)
  console.log('5: ' + team5)
}

//  Object

const person = {
  name: 'tt',
  age: 80
}
const captain = person                // ref
captain.number = 90

console.log(person)

const cp2 = Object.assign({}, person, {number: 99, age: 12}) // copy
console.log(cp2)

const wes = {
  name: 'wes',
  age: 100,
  social: {
    twitter: 'qq',
    fn: 'fb'
  }
}

const dev = Object.assign({}, wes)             // copy, but only one layer
const dev2 = JSON.parse(JSON.stringify(wes))
