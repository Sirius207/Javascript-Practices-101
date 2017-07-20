// from https://github.com/mqyqingfeng/Blog/issues/7

// Reference
let foo = 1

let fooReference = {
  base: 'environmentecord', 
  name: 'foo',
  strict: false
}

let foo = {
  bar: function () {
    return this
  }
}

foo.bar() // foo

let barReference = {
  base: 'foo',
  name: 'bar',
  strict: false
}

// GetBase(V). Returns the base value component of the reference V.
// GetValue. Return value

function foo (){
  return this 
}
foo() // MemberExpression = foo, getBase, != object, this = ImplicitThisValue(ref), undefine, window

var a = 1 
function foo (){
  a = 2
  return this.a // 2 
}
foo()

let a = 1 
function foo (){
  const a = 2
  return this.a // undefine
}
foo()

//

function foo(){
  return function (){
    return this
  }
}

foo()() // MemberExpression = foo()

foo = {
  bar: function (){
    return this
  }
}
foo.bar() // MemberExpression = foo.bar

// -----

let value = 1
let foo = {
  value: 2,
  bar: function () {
    return this.value
  }
}
console.log(foo.bar()) // M = foo.bar = ref, 2
console.log((foo.bar)()) // same as case 1,  2
console.log((foo.bar = foo.bar)()) //  ref != reference, this = undefine => window, = 1
console.log((false || foo.bar)()) // call getValue, this = undefine, window, 1
console.log((foo.bar, foo.bar)()) // call getValue, this = undefine, window, 1

//

function Foo(){
  getName = function () {
	  console.log(1)
  }
  return this
}

function getName () {
  console.log(5)
}

Foo().getName() // 1
