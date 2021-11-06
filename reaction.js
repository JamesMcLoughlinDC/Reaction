var start ;
var clicked;

window.onload = appear();

function dissapear() {
    clicked = Date.now();
    document.getElementById("box").style.display = "none";
    var seconds = clicked - start;
    alert(seconds / 1000 + "seconds ");
    var randomDelay = Math.random() * 4; 
    setTimeout(appear, randomDelay*1000);



}

function appear() {
    var randomColor = getRandomColor();
    var radius = getRandomShape();

    document.getElementById("box").style.marginTop = (Math.random() * 500) + 'px';
    document.getElementById("box").style.marginLeft = (Math.random() * 1200) + 'px';
    document.getElementById("box").style.height = (Math.random() * 200 + 20) + 'px';
    document.getElementById("box").style.width = (Math.random() * 200 + 20) + 'px';
    document.getElementById("box").style.backgroundColor = randomColor;
    document.getElementById("box").style.borderRadius = radius; 



    document.getElementById("box").style.display = "block";
    start = Date.now();

   
}

//Creates a random color

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


//Creates a random border, not necessary to have a whole new function but I wanted to play around with it...
function getRandomShape() {
    
    var radius = Math.random() * 100 ;


    if (radius < 10) {
        radius = 0;
    }
    
    var border = radius + "%";


    return border; 
}

function change_background() {
    alert("works");
    document.body.style.backgroundImage = "url('broom.jpg')";
}
