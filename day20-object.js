const a = 1
console.log(window.a)

this.window.b = 2
console.log(this.b)

// --- 

function foo (a) {
  let b = 2
  function c() {}
  const d = () => {}
  b = 3
}
foo(1)
AO = {
    arguments: {
        0: 1,
        length: 1
    },
    a: 1,
    b: undefined,
    c: reference to function c(){},
    d: undefined
}
// -- after execute
AO = {
    arguments: {
        0: 1,
        length: 1
    },
    a: 1,
    b: 3,
    c: reference to function c(){},
    d: reference to FunctionExpression "d"
}

function foo() {
    console.log(a);
    a = 1;
}

foo(); // a is not defined (hoist)

function bar() {
    a = 1;
    console.log(a);
}
bar(); // 1


// ---

console.log(foo); // function first, then variables

function foo(){
    console.log("foo");
}

var foo = 1; 

// --

console.log(foo); // the same, function first

var foo = 1;

function foo(){
    console.log("foo");
}

// --
var foo = 1;
console.log(foo); // 1, run foo = 1 in top down
function foo(){
console.log("foo");
};

// --
console.log(foo); // function 
var foo = 1;
console.log(foo); // 1
function foo(){};
//--
console.log(foo); // function
function foo(){};
console.log(foo); // function
var foo = 1;