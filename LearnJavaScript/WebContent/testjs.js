var greatings = "Hello World!";
alert(greatings);

var person1 = {
		firstName: "Reinaldo",
		lastName: "Velazquez"
};
alert(person1.firstName + " " + person1.lastName);

var foo = [100];
alert(foo[0]);
alert(foo.length);

function add(num1,num2){
	result = num1 + num2;
	return result;
}
var result = add(10,20);
alert(result);

for (var i = 0; i < 5; i++) {
	alert("Try: " + i);
	
}

var i = 0;
while(i<5){
	console.log("Currently at " + i);
	i++;
}

var myArray = [];
myArray.push("Hello");
myArray.push("world");
myArray.push("!!!");

console.log(myArray);

function carFunction()
{
var carname;
carname="Volvo";
document.getElementById("car").innerHTML=carname;
}

function printElementAndIndex( elem, index ) {
  console.log( "Index " + index + ": " + elem );
}
myArray.forEach(printElementAndIndex);

