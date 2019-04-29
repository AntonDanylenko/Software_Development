var x=[1,2,3,4];

var newX1 = x.reduce(function(a,b){return a+b});
var newX2 = x.map(function(n){return n*2})
var newX3 = x.filter(function(n){ return (n%2==0)});

console.log("newX1: ", newX1)
console.log("newX2: ", newX2)
console.log("newX3: ", newX3)
