// 3 times
// Given this function:

// function call3Times(fun) {
//   fun();
//   fun();
//   fun();
// }
// Use the call3Times function to print "Hello, world!" 3 times.

// let fun = 'Hello, world!'

function fun() {
    console.log('Hellow, World!')
}

function call3Times(fun) {
    fun();
    fun();
    fun();
  }

call3Times(fun);