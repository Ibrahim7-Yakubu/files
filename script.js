var circle=document.getElementById("circle");
var up=document.getElementById("up");
var down=document.getElementById("down");

var rotateValue=circle.style.transform;

var rotateSum;

up.addEventListener("click", function(){
rotateSum=rotateValue + "rotate(-90deg)";
circle.style.transform= rotateSum;
rotateValue = rotateSum;
});

down.addEventListener("click", function(){
rotateSum=rotateValue + "rotate(90deg)";
circle.style.transform= rotateSum;
rotateValue = rotateSum;
});