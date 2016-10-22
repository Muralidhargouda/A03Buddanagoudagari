
function calc(){
var principle= $("#t01").val();
var rate= $("#t02").val();
var simpleInter=document.getElementById("r01");
var compoundInter=document.getElementById("r02");
var month=document.getElementById("r03");
var year=document.getElementById("r04");
if((principle!==""&&principle>0)&&(rate!==""&&rate>0))
{
if(month.checked){
var month1=prompt("enter no.of months");
term=parseFloat(month1)/12;
}
else if (year.checked){
var year1=prompt("enter no.of years");

term=parseFloat(year1);
}
else{
alert("please select an option");
}
if (simpleInter.checked)
{

var simple=parseFloat(principle*rate*term)/100;
var total= parseFloat(principle) + parseFloat(simple);
alert("The simple interest amount is:"+simple.toFixed(2));
alert("Total amount to be paid is:"+total.toFixed(2));
//document.getElementById("t04").value="The simple interest amount is:"+simple.toFixed(2);
//document.getElementById("t05").value="Total amount to be paid is:"+total.toFixed(2);
}
else if(compoundInter.checked)
{
var times=prompt("how many times it is compounded per year:");

var compound=((principle * Math.pow((1 + ((rate/times)/100)),term*times))-principle);
var total1=parseFloat(compound)+parseFloat(principle);
alert("The simple interest amount is:"+compound.toFixed(2));
alert("Total amount to be paid is:"+total1.toFixed(2));

//document.getElementById("t04").value="The compound interest amount is:"+compound.toFixed(2);
//document.getElementById("t05").value="Total amount to be paid is:"+total1.toFixed(2);
}

else{
alert("Please select an option");
}
}
else{
alert("enter every field/enter only positive numbers");
}
}

function submitfun()
{
	var alphaExp = /[a-zA-Z]/;
	var num= /[0-9]/;
	var n = document.getElementById("name").value();
	if(name.value.match(num))
	{

	window.alert("Please enter Your name Correctly(only Characters). Thank you");
	}
	else if(name.value.match(alphaExp))
	{
	window.alert("Thank you: "+n+ "! I'll get back to u soon.");
	}

	}