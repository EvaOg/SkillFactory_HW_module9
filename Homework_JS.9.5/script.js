
let page; 
let limit; 
let resultDiv = document.querySelector('.resultDiv');
let btn = document.querySelector('.btn');

btn.addEventListener('click', getPic)

async function getPic() {
    let urlPic = await getImg();
    createPic(urlPic);
}

async function getImg() {
    page = parseInt(document.querySelector('#pageNumberID').value);
    limit = parseInt(document.querySelector('#limitID').value);
    if (page < 1 || page > 10 || limit < 1 || limit > 10) {
        alert('Please enter a correct number')
        return;
    } 
    
    let promisResult = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
    let json = await promisResult.json();
    return json
}



function createPic(url) {
        url.forEach(el => {
            const newPic = document.createElement('img');
            newPic.classList.add("card-image");
            newPic.src = `${el.download_url}`;
            resultDiv.appendChild(newPic)
        });
}





