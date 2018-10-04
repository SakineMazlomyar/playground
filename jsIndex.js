function backgrounChange(){
/*  var myBackgroundVariable = document.getElementById("body");
    var newColor = myBackgroundId.classList("bodyBackground");

   if(myBackgroundId == newColor){
    
    } else{
        myBackgroundId = document.getElementById("body")

    }  */

    var backgroundChangeColor = document.body.style.backgroundColor;
   /*  var style = document.body.style; */
    if(document.body.style.backgroundColor == "white"){
        document.body.style.backgroundColor = "purple";
    }else{
        document.body.style.backgroundColor = "white";
    }



}

//pass by value style = object and string
//string, number, boolen

//pass by reference
//array, object

//pass by value does not change the value pass by reference picks to our array our object
function mathRandom(){
    var myNumberColor = Math.random();
    if(myNumberColor<0.3){
        document.body.style.backgroundColor = "blue";

    }
    else if(myNumberColor<0.4){
        document.body.style.backgroundColor = "red";

    }
    else if(myNumberColor<0.5){
        document.body.style.backgroundColor = "black";

    }
    else if(myNumberColor<0.6){
        document.body.style.backgroundColor = "purple";

    }
    else{
        document.body.style.backgroundColor = "white";

    }

    
}

function exaktColor(){

    var red=Math.round(Math.random() * 255);
    var green=Math.round(Math.random() * 255);
    var blue=Math.round(Math.random() * 255);

/*     den långa raden för att få den avrund och random
var TheRandomNumber = Math.random()*255;
    var m= Math.floor(TheRandomNumber)
    console.log(TheRandomNumber)
 */
    var rgbVariable = "rgb(" + red +"," + green + "," + blue +")";
    console.log(rgbVariable)
    document.body.style.backgroundColor = rgbVariable;
/*     document.body.style.backgroundColor = rgbVariable;
    var rgbVariableTwo = "rgb(" + green+ ",222,222)";
    document.body.style.backgroundColor = rgbVariableTwo;
    var rgbVariableThree = "rgb(" + blue+ ",222,222)";
    document.body.style.backgroundColor = rgbVariableThree; */
}
/* setInterval(rgbVariable, 1000) */

