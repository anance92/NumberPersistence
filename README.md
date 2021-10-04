# NumberPersistence

The additive persistence of an integer, n, is the number of times you have to replace n with the sum of its digits until n becomes a single digit integer.

The multiplicative persistence of an integer, n, is the number of times you have to replace n with the product of its digits until n becomes a single digit integer.

Create two functions that take an integer as an argument and:

Return its additive persistence.
Return its multiplicative persistence.

Examples:

additivePersistence(123456) --> 2
// 1 + 2 + 3 + 4 + 5 + 6 = 21
// 2 + 1 = 3

multiplicativePersistence(123456) --> 2
// 1 x 2 x 3 x 4 x 5 x 6 = 720
// 7 x 2 x 0 = 0