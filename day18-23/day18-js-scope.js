let value = 'global'

function foo () {
  console.log(value)
}

function bar () {
  let value = 'local'
  foo()
}

bar() // global

// -----

let value2 = 'global'

function bar2 () {
  let value2 = 'local'
  foo2()

  function foo2 () {
    console.log(value2)
  }
}

bar2() // local

// ---

let value3 = 'global' // second

function bar3 () {
  // let value3 = 'local' // first
  foo3()
  function foo3 () {
    console.log(value3)
  }
}

bar3() // global

// ------------

let scope = 'global'

function checkscope () {
  let scope = 'local'
  function f () {
    return scope
  }
  return f()
}
console.log(checkscope()) // local

// --

let scope2 = 'global'

function checkscope2 () {
  let scope2 = 'local'
  function f () {
    return scope2
  }
  return f
}
console.log(checkscope2()()) // local
