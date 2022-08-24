
// First generate random number for random choice that is 1-3



// For Hand1
var randomNumber1 = Math.floor(Math.random()*3)+1
// Now select the random handom images

var RandomHandImage1 = "images/hand1" + randomNumber1 + ".png";

document.querySelector('.image1').setAttribute("src",RandomHandImage1);

// For Hand2
var randomNumber2 = Math.floor(Math.random()*3)+1
// Now select the random handom images

var RandomHandImage2 = "images/hand2" + randomNumber2 + ".png";

document.querySelector('.image2').setAttribute("src",RandomHandImage2);


// Now we need to build the logic for win and loss

// 1 -> hand
// 2 -> rock
// 3 -> scissor


if(randomNumber1 == 1 && randomNumber2 == 2)
{
    var imageface1 = "images/happy1.png";
    var imageface2 = "images/sad1.png";
    document.querySelector(".smily1").setAttribute("src",imageface1);
    document.querySelector(".smily2").setAttribute("src",imageface2);
}
else if(randomNumber1 == 1 && randomNumber2 == 3)
{
    var imageface1 = "images/happy1.png";
    var imageface2 = "images/sad1.png";
    document.querySelector(".smily1").setAttribute("src",imageface2);
    document.querySelector(".smily2").setAttribute("src",imageface1);
}
else if(randomNumber1 == 2 && randomNumber2 == 1)
{
    var imageface1 = "images/happy1.png";
    var imageface2 = "images/sad1.png";
    document.querySelector(".smily1").setAttribute("src",imageface2);
    document.querySelector(".smily2").setAttribute("src",imageface1);
}
else if(randomNumber1 == 2 && randomNumber2 == 3)
{
    var imageface1 = "images/happy1.png";
    var imageface2 = "images/sad1.png";
    document.querySelector(".smily1").setAttribute("src",imageface1);
    document.querySelector(".smily2").setAttribute("src",imageface2);
}
else if(randomNumber1 == 3 && randomNumber2 == 1)
{
    var imageface1 = "images/happy1.png";
    var imageface2 = "images/sad1.png";
    document.querySelector(".smily1").setAttribute("src",imageface1);
    document.querySelector(".smily2").setAttribute("src",imageface2);
}
else if(randomNumber1 == 3 && randomNumber2 == 2)
{
    var imageface1 = "images/happy1.png";
    var imageface2 = "images/sad1.png";
    document.querySelector(".smily1").setAttribute("src",imageface2);
    document.querySelector(".smily2").setAttribute("src",imageface1);
}


//So for same hands it will be no expression otherwise there will be sad or happy expression :)






