//detects button presses on the drum kit website
var total = document.querySelectorAll(".drum").length;    //gets the total number of buttons with class drum

for(var i = 0 ; i< total ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",onClick);  //"click" is the TYPE OF EVENT we are listening for
    
    function onClick(){
        var buttonClicked = this.innerHTML;  //the innerHTML of the button that was clicked is stored in buttonClicked variable like w,a,s,d,j,k,l ands this refers to the button that was clicked when the current for loop runs 

        keyPresses(buttonClicked);  
        buttonAnimation(buttonClicked);  //calls the function and the entire switch statement is executed based on the button clicked

    }
}

//detects keyboard presses

document.addEventListener("keydown", function(event){  //the event paarmeter listens to the event that triggered the function and contains the information on the key that was pressed
    keyPresses(event.key);  //event.key gives the value of the key that was pressed
    buttonAnimation(event.key);
    });

    function keyPresses(key){     //key is taken as the function parameter here since it determines what sound will be produced 

        switch(key){
            case "w":
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;

            case "a":
                var kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
                break;

            case "s":
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
                break;

            case "d":
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;

            case "j":
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;

            case "k":
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;

            case "l":
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;    
                
            default: 
           console.log(buttonClicked);

    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);  //selects the button with the class of the key that was pressed or clicked

    activeButton.classList.add("pressed");  //adds the class "pressed" to the button that was clicked or pressed

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100 );
    
    }


    
        
    
    







// for(var i = 0; i<7 ; i++){

// document.querySelectorAll("button")[i].addEventListener("click", afterClick);

// function afterClick(){
//     alert("hey!");
// }
// }

