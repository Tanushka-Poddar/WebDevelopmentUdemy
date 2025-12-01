var total = document.querySelectorAll(".drum").length;

for(var i = 0 ; i< total ; i++){
    document.querySelectorAll("button")[i].addEventListener("click",onClick);
    function onClick(){
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
    }
}






// for(var i = 0; i<7 ; i++){

// document.querySelectorAll("button")[i].addEventListener("click", afterClick);

// function afterClick(){
//     alert("hey!");
// }
// }

