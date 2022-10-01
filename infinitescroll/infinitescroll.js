const container = document.querySelector('.container');
//pt1 - get a batch of images and append to container
const URL = 'https://picsum.photos/300/300?';

function getRandomNum(){
    return Math.floor(Math.random() * 100);
}
function loadImages(numImages=12){
    let i=0;
    while(i<numImages){
        const img = document.createElement('img');
        img.src=`${URL}${getRandomNum()}`
        container.appendChild(img);
        i++;
    }
}

loadImages()

//pt2 - listen for scroll event and load more images if reach bottom of window

window.addEventListener('scroll',()=>{
    console.log(window.innerHeight);//how many pix scrolled
    //scrollHeight -height entire document
    //innerHeight - what user can see
    //scrollY = how much user scrolled

    //if(innerHeight + scrollY === scrollHeight) we reached end of page

    if(window.scrollY+window.innerHeight>=document.documentElement.scrollHeight){
        loadImages();
    }

})
