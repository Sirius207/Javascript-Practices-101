// Wrong case

function wrapElements (a) {
  let result = []
  for (var i = 0, n = a.length; i < n ; i++) {
    result[i] = function () {return a[i]}
  }
  return result
}

let wrapped = wrapElements([10, 20, 30, 40, 50])
let f =  wrapped[0]
f() // undefined

// use let

function wrapElements2 (a) {
  let result = []
  for (let i = 0, n = a.length; i < n ; i++) {
    result[i] = function () {return a[i] }
  }
  return result
}

let wrapped2 = wrapElements2([10, 20, 30, 40, 50])
let f2 = wrapped2[0]
f2() // 10

// use IIFE
function wrapElements3 (a) {
  let result = []
  for (var i = 0, n = a.length; i < n ; i++) {
    (function (j){
      result[i] = function () {return a[j] }
    })(i)
  }
  return result
}
let wrapped3 = wrapElements3([10, 20, 30, 40, 50])
let f3 = wrapped3[0]
f3() // 10
