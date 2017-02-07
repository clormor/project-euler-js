var collatz = function(n) {
  var result = [n]
  var i = n
  while (i != 1) {
    if (i % 2 == 0) {
      i /= 2
    } else {
      i = (3 * i) + 1
    }
    result.push(i)
  }
  return result
}

var problem14 = function() {
  var longestStartingNumber = 0
  var longestChain = 0
  for (var i = 1; i < 1000000; i++) {
    result = collatz(i).length
    if (result > longestChain) {
      longestChain = result
      longestStartingNumber = i
    }
  }

  return longestStartingNumber
}

console.log(problem14())
