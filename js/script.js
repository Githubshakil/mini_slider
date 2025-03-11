

var photos = ["images/20200225_181606.jpg","images/IMG_0006.JPG","images/IMG_0568.jpg" ]

var imgTag = document.querySelector("img");

var count = 0;






function next(){
count++;

if(count >= photos.length){
count = 0;
imgTag.src = photos[count];
}else{
    imgTag.src = photos[count];
}



}
setInterval(next, 3000);




function prev(){
    count--;

if(count <= 0){
count = photos.length - 1;
imgTag.src = photos[count];
}else{
    imgTag.src = photos[count];
}


}




