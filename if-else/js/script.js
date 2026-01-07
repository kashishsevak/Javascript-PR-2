let a = 10, b = 20, c = 30, d = 40, e = 50;

if (a >= b && a >= c && a >= d && a >= e) {
    console.log('a is max');
} else if (b >= c && b >= d && b >= e) {
    console.log('b is max');
} else if (c >= d && c >= e) {
    console.log('c is max');
} else if (d >= e) {
    console.log('d is max');
} else {
    console.log('e is max');
}