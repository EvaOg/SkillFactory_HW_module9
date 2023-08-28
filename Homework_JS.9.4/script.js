let width;
let height;

const btn = document.querySelector('.btn');
const w = document.querySelector('#width');
const h = document.querySelector('#height');
const resultDiv = document.getElementsByClassName('result')[0];

btn.addEventListener("click", onButtonClick)

async function onButtonClick() {
    let urlPic = await getImg();
    createPic(urlPic);
}


async function getImg() {
    width = parseInt(w.value);
    height = parseInt(h.value);
        
    if (width > 300 || height < 100) {
        alert('Please enter a correct size')
        return;
    }
    
    let responce = await fetch(`https://picsum.photos/${width}/${height}`)
    return responce.url
} 


const createPic = (url) => {
    if(!url) {
        return;
    }
    const newPic = document.createElement('img');
    newPic.src = url;
    resultDiv.appendChild(newPic)
}





            
