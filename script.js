let imageRef = document.getElementsByClassName("image");
let imageRef2 = document.getElementsByClassName("image2");

for(let i = 0; i < imageRef.length;i++){
    imageRef[i].onmouseover = function(){
        imageRef[i].style.width="250px"
        imageRef[i].style.opacity="0.5"
    }
    imageRef[i].onmouseout = function(){
        imageRef[i].style.width="250px"
        imageRef[i].style.opacity="1"
    }
    imageRef[i].onclick = function(){
        
    }
}
for(let i = 0; i < imageRef.length;i++){
    imageRef2[i].onmouseover = function(){
        imageRef2[i].style.width="150px"
        imageRef2[i].style.opacity="0.5"
    }
    imageRef2[i].onmouseout = function(){
        imageRef2[i].style.width="150px"
        imageRef2[i].style.opacity="1"
    }
}