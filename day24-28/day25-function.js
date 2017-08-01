
// sample 1-1
let obj = {
  hello: function() {
    return this.username
  },
  username: 'Hans'
}
obj.hello() // Hans

let obj2 = {
  hello: obj.hello,
  username: 'Mag'
}

obj2.hello() // Mag call by obj2

// sample 1-2
let obj = {
  hello: () => {
    return this.username
  },
  username: 'Hans'
}
obj.hello() // undefined

let obj2 = {
  hello: obj.hello,
  username: 'Mag'
}

obj2.hello() // undefined

// sample 2-1
function hello3 () {
  return this.username
}
let obj3 = {
  username: 'tt',
  hello: hello3
}
hello3() // undefined

//
// sample 3 high level function
//
function buildString (n, callback) {
  let result = ''
  for (let i = 0; i < n; i++) {
    result += callback(i)
  }
  return result
}
let alphabet = buildString(26, function (i){
  return String.fromCharCode(32 + i)
})
console.log(alphabet) // some string
