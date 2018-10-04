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
/* #000000 */
function hexNumber(){
    var hashtak = "#"
    var colorOne =randomizeChecking(Math.round(Math.random() *15));   
    var colorTwo =randomizeChecking(Math.round(Math.random() *15));   
    var colorThree =randomizeChecking(Math.round(Math.random() *15));   
    var colorFour =randomizeChecking(Math.round(Math.random() *15));   
    var colorFive =randomizeChecking(Math.round(Math.random() *15));   
    var colorSix =randomizeChecking(Math.round(Math.random() *15));

/*     var f = Math.floor(Math.random() *15);       
    var e = Math.floor(Math.random() *14); 
    var  d= Math.floor(Math.random() *13);       
    var f = Math.floor(Math.random() *12); 
    var f = Math.floor(Math.random() *11);       
    var f = Math.floor(Math.random() *10);  */
      
    var hexColor =  hashtak + colorOne+ colorTwo+colorThree+colorFour+colorFive+colorSix
    document.body.style.backgroundColor = hexColor;
    console.log(hexColor)

}
/* vår value är samma som colorOne, ColorTwo and so on */
function randomizeChecking(value){
    if(value == 10){
        return "A";
    }
    else if(value == 11){
        return "B";
    }
    else if(value == 12){
        return "C";
    }
    else if(value == 13){
        return "D";
    }
    else if(value == 14){
        return "E";
    }
    else if(value == 15){
        return "F"
    }
    else{
        return value
    }
}

