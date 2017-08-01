// use for delete, modify, overwrite method

let table = {
  entries: [],
  addEntry: function (key, value) {
    this.entries.push({key: key, value: value})
  },
  newForEach: function (f, thisArg) {
    let entries = this.entries
    for (let i = 0, n = entries.length; i < n; i++) {
      let entry = entries[i]
      f.call(thisArg, entry.key, entry.value, i)
    }
  }
}

let table2 = {a: '1', b: '2'}
let table1
table1.newForEach(table2.addEntry, table2)

// apply
let scores = [1,3,2]
average.apply(null, scores) // = average(score(0), score(1), score(2))

let buffer = {
  state: [],
  append: function () {
    for (let i = 0, n = arguments.length; i < n; i++) {
      this.state.push(arguments[i])
    }
  }
}

buffer.append('Hello, ')
buffer.append('ff', ' ', 'efe')
buffer.append('dd')

buffer.append.apply(buffer, [1, 2, 3])
