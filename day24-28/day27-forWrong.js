
// the keys of array are strings
let scores = [98, 74, 85, 77, 93, 100, 89]
let total = 0
for (let score in scores) {
  total += score
}
let mean = total / scores.length // total = 00123456
console.log(mean) // 17636....
