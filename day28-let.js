// from https://zhuanlan.zhihu.com/p/28140450

var liList = document.querySelectorAll('li')
for( let i=0; i<liList.length; i++){
  liList[i].onclick = function(){
    console.log(i) // 0, 1, 2, 3, 4, 5
  }
}

var liList = document.querySelectorAll('li')
for( let i=0; i<liList.length; i++){
  let i = i
  liList[i].onclick = function(){
    console.log(i)
  }
}
// 
x = "global";
// function scope:
(function() {
    x; // not "global"

    var/let/… x;
}());
// block scope (not for `var`s):
{
    x; // not "global"

    let/const/… x;
}

// let tdz
let x = 'global'
{
  console.log(x) // Uncaught ReferenceError: x is not defined
  let x = 1
}

