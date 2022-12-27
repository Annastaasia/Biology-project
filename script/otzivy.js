let i = 1;

const image1 = document.getElementById("otzivy1");
const image2 = document.getElementById("otzivy2");
const image3 = document.getElementById("otzivy3");

const images = new Array('./assets/images/otzivy/1.jpg','./assets/images/otzivy/2.jpg','./assets/images/otzivy/3.jpg','./assets/images/otzivy/4.jpg', './assets/images/otzivy/5.jpg','./assets/images/otzivy/6.jpg','./assets/images/otzivy/7.jpg','./assets/images/otzivy/8.jpg','./assets/images/otzivy/9.jpg', './assets/images/otzivy/10.jpg');


function rightClick(){
    if (i != 7){
        i++;
        image1.src = images[i];
        image2.src = images[i+1];
        image3.src = images[i+2];
    };
        
}    

function leftClick(){
    if (i > 1){
        i = i - 1;
        image1.src = images[i-1];
        image2.src = images[i];
        image3.src = images[i+1];
    };  
}

