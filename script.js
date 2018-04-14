//create an array named imagesArray that contains the seven image file names
//dog.jpg, fox.jpg, mouse.jpg, alligator.jpg, fish.jpg, parrot.jpg and cat.jpg

var imagesArray = ["dog.jpg", "fox.jpg", "mouse.jpg", "alligator.jpg", "fish.jpg", "parrot.jpg", "cat.jpg"];


//create a function named displayImage
//it should not have any values passed into it

function displayImage(){

    //the first statement should generate a random number in the range 0 to 6 (the subscript values of the image file names in the imagesArray)
    var num = Math.floor(Math.random() * 7); // 0...6
    //the second statement display the random image from the imagesArray array in the canvas image using the random number as the subscript value
    document.canvas.src = imagesArray[num];

}
