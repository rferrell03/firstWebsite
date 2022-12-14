function colorButton(){
    var randomColor = "";
    randomColor = getRandomColor();
}

function getRandomColor() 
{
    var color = "";
    for(var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    }
    return "#" + color;
}

function changeCat(){
    const catPics = ["catPics/cat1.jpg","catPics/cat2.jpg","catPics/cat3.jpg","catPics/cat4.jpg","catPics/cat5.jpg","catPics/cat6.jpg","catPics/cat7.jpg","catPics/cat8.jpg","catPics/cat9.jpg","catPics/cat10.jpg"];
    var i = getRandomNumber(catPics.length);
    document.getElementById("catPictures").src = catPics[i];
    console.log(i);
    
}

function getRandomNumber(upperBound){
    var randomNum;
    randomNum = Math.floor(Math.random() * upperBound);
    return randomNum;
}
function doNothing(){}