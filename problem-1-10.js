// Problem 1
sumMultiplesOf3And5 = function() {
	var result = 0
	var max = 1000

	for (var i = 1; i < max; i++) {
		if (i%3 == 0 || i%5 == 0) {
			result += i
		}
	}

	return result
}

// Problem 2
var sumEvenFibonacci = function() {
	var result = 0
	var max = 4000000

	for (var i = 1, j = 2, t = 0; i <= max ; t=i, i=j, j+=t) {

		if (i%2 == 0) {
			result += i
		}
	}

	return result
}

// Problem 3
var largestPrimeFactor = function() {
	var number = 600851475143
	var max = 0

	for (var i = 2; i <= number; i++) {
		while (number % i == 0) {
			max = i
			number /= i
		}
	}

	return max
}

// Problem 4
var largest3DigitPallindromeProject = function() {
	var min = 100
	var max = 999
	var result = 0

	for (var x = min; x <= max; x++) {
		for (var y = min; y <= max; y++) {
			if (isPallindrome(x*y) && result < (x*y)) {
				result = (x*y)
			}
		}
	}

	return result
}

var isPallindrome = function(n) {
	var numberString = ''+n

	for (var x=0,y=numberString.length - 1;x<y;x++,y--) {
		if (numberString[x] !== numberString[y]) {
			return false
		}
	}

	return true
}

// Problem 5
var divisibleByAll = function() {
	var dividors = 20

	for (var i = dividors; i < Number.MAX_VALUE; i++) {
		var dividesByAll = true
		for (var n = 1; n <= dividors; n++) {
			if (i%n != 0) {
				dividesByAll = false
			}
		}

		if (dividesByAll) {
			return i
		}
	}

	return "No such number exists"
}

// Problem 6
var problem6 = function() {
	var max = 100
	var sumOfSquares = 0
	var squareOfSums = 0

	for(var i = 1; i <= max; i++) {
		sumOfSquares += (i*i)	
	}

	for (var i = 1; i <= max; i++) {
		squareOfSums += (i)
	}

	return (squareOfSums * squareOfSums) - sumOfSquares
}

// Problem 7 - Find the 10,001st prime number
var buildPrimes = function() {
	var numPrimes = 10001
	// Initialise an array containing only prime numbers
	var primes = [2]

    // For every odd integer, add it to the array if it is prime (stop when we have enough)
    for (var x = 3; x < Number.MAX_SAFE_INTEGER && primes.length <= numPrimes; x += 2) {
    	if(isPrime(x,primes)) {
    		primes.push(x)
    	}
    }
    
    // Once we have enough primes, return the last one
    return primes[numPrimes - 1]
}

// x is prime if all the prime numbers <= sqrt(x) do not divide x
var isPrime = function(x, primes) {
	// Find sqrt(x)
	var sqrt = Math.floor(Math.sqrt(x))

    // Divide x by each applicable prime, return false if any of them divide x
    for(var n = 0; n < primes.length && primes[n] <= sqrt; n++) {
    	if (x % primes[n] == 0) {
    		return false
    	}
    }
    
    // At this point x must be prime
    return true
}

// Problem 8 - find the max product of 13 consecutive digits
var maxProduct = function() {

	// This is the array of digits given
	var bigNum = '73167176531330624919225119674426574742355349194934'
	bigNum += '96983520312774506326239578318016984801869478851843'
	bigNum += '85861560789112949495459501737958331952853208805511'
	bigNum += '12540698747158523863050715693290963295227443043557'
	bigNum += '66896648950445244523161731856403098711121722383113'
	bigNum += '62229893423380308135336276614282806444486645238749'
	bigNum += '30358907296290491560440772390713810515859307960866'
	bigNum += '70172427121883998797908792274921901699720888093776'
	bigNum += '65727333001053367881220235421809751254540594752243'
	bigNum += '52584907711670556013604839586446706324415722155397'
	bigNum += '53697817977846174064955149290862569321978468622482'
	bigNum += '83972241375657056057490261407972968652414535100474'
	bigNum += '82166370484403199890008895243450658541227588666881'
	bigNum += '16427171479924442928230863465674813919123162824586'
	bigNum += '17866458359124566529476545682848912883142607690042'
	bigNum += '24219022671055626321111109370544217506941658960408'
	bigNum += '07198403850962455444362981230987879927244284909188'
	bigNum += '84580156166097919133875499200524063689912560717606'
	bigNum += '05886116467109405077541002256983155200055935729725'
	bigNum += '71636269561882670428252483600823257530420752963450'

    // Create a rolling window of 13 digits
    var windowSize = 13
    var maxProduct = 0
    
    // Roll window through the array of digits
    for (var i = 0; i <= bigNum.length - windowSize; i++) {

    	// Grab the first number in the window
    	var product = bigNum.charAt(i)

        // Multiply it by all other numbers in the window
        for (var n = 1; n < windowSize; n++) {
        	product *= bigNum.charAt(n+i)
        }
        
        // If it's the biggest product so far, save it
        if (product > maxProduct) {
        	maxProduct = product
        }
    }
    
    // Return the biggest product
    return maxProduct
}

// Problem 9 - Find Pythagorean triple (a,b,c) such that a + b + c = 1000
var findTriple = function() {
	var a,b,c
	var max = 1000

	for (a = 1; a < 333; a++) {
		for (b = a + 1; b < (max - a) / 2; b++) {
			c = 1000 - b - a
			if (c * c == (a * a) + (b * b)) {
				return a * b * c ;
			}
		}
	}

	return "I couldn't find it :("
}

// Problem 10 - Find the sum of all primes less than 2 million
var sumPrimesUpTo = function(max) {
	// Initialise an array containing only prime numbers
	var primes = [2]
	var result = 2

    // For every odd integer, add it to the array if it is prime
    for (var x = 3; x < Number.MAX_SAFE_INTEGER; x += 2) {
    	if(isPrime(x,primes)) {
    		if (x > max) {
    			return result
    		} else {
    			result += x
    			primes.push(x)
    		}
    	}
    }

    return result
}
