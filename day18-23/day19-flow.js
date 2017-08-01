let ECStack = []

function a () {
  b()
}

function b () {
  c()
}

function c () {
  console.log('test')
}

a()

// Stack
ECStack.push('fun1')
ECStack.push('fun2')
ECStack.push('fun3')
ECStack.pop()
ECStack.pop()
ECStack.pop()

//

let scope2 = 'global'

function checkscope2 () {
  let scope2 = 'local'
  function f () {
    return scope2
  }
  return f
}
console.log(checkscope2()()) // local
// Stack
ECStack.push('checkscope2')
ECStack.pop()
ECStack.push('f')
ECStack.pop()
