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