console.log('the best team')

function fib(n) {
  if (n <= 2) return 1
  return fib(n - 1) + fib(n - 2)
}

console.time('fibonacci')
console.log(40)
console.timeEnd('fibonacci