// Sample 1 - Allow Ref Var defined outside function

function makeSandwich () {
  let magicIngredient = 'peant butter'
  function make (filling) {
    return magicIngredient + 'and ' + filling
  }
  return make('Jelly')
}

makeSandwich()

// Sample 2-1 Allow Ref var defined outside function after return

function sandwichMaker () {
  let magicIngredient = 'peant butter'
  function make (filling) {
    return magicIngredient + 'and ' + filling
  }
  return make // ref magicIngredient & filling
}

let f = sandwichMaker()
f('jelly')
f('bananas')
f('marshmallows')

// Sample 2-2

function sandwichMaker2 (magicIngredient) {
  function make (filling) {
    return magicIngredient + ' and ' + filling
  }
  return make
}

let ham = sandwichMaker2('ham') // save ham as magicIngredient
ham('cheese')
let turkey = sandwichMaker2('turkey')
turkey('Swiss')

// Sample 3 Change outer variables, Closures just save ref of outer variables

function box() {
  let val = undefined
  return {
    set: (newVal) => { val = newVal },
    get: () => val,
    type: () => { return typeof val }
  }
}

let b = box() // three closures
b.type()
b.set(98.6)
b.get()
b.type() // number
