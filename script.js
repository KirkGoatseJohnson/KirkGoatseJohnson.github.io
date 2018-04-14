//create an array named imagesArray that contains the seven image file names
//dog.jpg, fox.jpg, mouse.jpg, alligator.jpg, fish.jpg, parrot.jpg and cat.jpg

var imagesArray = ["hello.jpg", "hello1.jpg","hello2.jpg"];


//create a function named displayImage
//it should not have any values passed into it

function displayImage(){
    var num = Math.floor(Math.random() * imagesArray.length);
    document.getElementById('hello').src = imagesArray[num];
}

displayImage();
