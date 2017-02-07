// Problem 12 - Find the first triangle number with > 500 factors

var triangle = function(n) {
  result = 1
  for (var i = 2; i <= n; i++) {
    result += i
  }
  return result
}

var numFactors = function(n) {
  // count number of factors <= sqrt(n). 1 is always a factor, so initial value is 1
  factors = 1

  // loop through every number from to up to sqrt(n)
  sqrt = Math.floor(Math.sqrt(n))
  for (var i = 2; i <= sqrt; i++) {
    if (n % i == 0) {
      // if i is a factor of n, increment the counter
      factors++
    }
  }

  // double the count because we only tested up to sqrt(n)
  factors *= 2

  // subtract one if n is an integer square, otherwise we count sqrt(n) twice
  if (Number.isInteger(Math.sqrt(n))) {
    factors--
  }

  return factors
}

var problem12 = function() {
  for (var x = 1, y = triangle(x);; ++x, y = triangle(x)) {
    result = numFactors(y)
    if (result > 500) {
      return y
    }
  }
}

console.log(problem12())
