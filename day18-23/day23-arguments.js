// from https://github.com/mqyqingfeng/Blog/issues/14

var data = []

for (var i = 0; i < 3; i++) {
  (data[i] = function () {
    console.log(arguments.callee.i)
  }).i = i
}

data[0]() // 0
data[1]() // 1
data[2]() // 2

// ---
function foo (name, age, sex, hobbit) {
  console.log(name, arguments[0])
  name = 'new name'
  console.log(name, arguments[0]) // new name, new name
  arguments[1] = 'new age'
  console.log(age, arguments[1]) // new age, new age
  // --- undwfine
  console.log(sex) // undefine
  sex = 'new sex'
  console.log(sex, arguments[2]) // new sex, undefine
  arguments[3] = 'new hobbit'
  console.log(hobbit, arguments[3]) // undefined, new hobbit
}
foo('name', 'age')

// pass arguments
function foo () {
    bar.apply(this, arguments)
}
function bar (a, b, c) {
   console.log(a, b, c)
}

foo(1, 2, 3)

// es6 
function func(...arguments) {
    console.log(arguments); // [1, 2, 3]
}

func(1, 2, 3)