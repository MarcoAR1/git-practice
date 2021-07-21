console.log('the best team')

function fib(n) {
  if (n <= 2) return 1
  return fib(n - 1) + fib(n - 2)
}

console.log('ahora me toca resolver el conflicto a mi!')
console.time('fibonacci')
console.log(40)
console.timeEnd('fibonacci')
console.log('vamos a ver quien edita primero y entra sin conflicto!')
