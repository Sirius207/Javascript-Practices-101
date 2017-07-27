// 1-1
let buffer = {
  entries: [],
  add: function (s) {
    this.entries.push(s)
  },
  concat: function () {
    return this.entries.join('')
  }
}

let source = ['867', '-', '5309']
source.forEach(buffer.add, buffer)
buffer.concat()

// 1-2
source.forEach(function (s) {
  buffer.add(s)
})
buffer.concat()

// 1-3
source.forEach(buffer.add.bind(buffer))
buffer.concat()

// buffer.add === buffer.add.bind(buffer)  <-- false
