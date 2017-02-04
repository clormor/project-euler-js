// problem 1

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

// problem 2

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

// problem 3

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

// problem 4

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
