
console.log('%c Some Text', 'font-size: 50px')

console.warn('warn')

console.error('error')

console.info('info')

const p = document.querySelector('p')

console.assert(1 === 0, 'Wrong')

console.dir(p)

console.clear()

const dogs = [{'name': 'as', 'age': 7}, {'name': 'at', 'age': 8}]

dogs.forEach(dog => {
  console.group(`${dog.name}`)
  console.log(`This is ${dog.name}`)
  console.groupEnd(`${dog.name}`)
})

console.count('times')
console.count('times')
console.count('times')
console.count('times')

console.time('fetching data')
console.timeEnd('fetching data')

console.table(dogs)
