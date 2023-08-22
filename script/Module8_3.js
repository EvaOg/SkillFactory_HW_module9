
let inputNumber;
const resultNode = document.getElementsByClassName('result')[0];

function getInputValue () {
    let form = document.forms.inputForm;
    let inputPlace = form.elements.inputbox;
    let input = inputPlace.value;
    inputNumber = parseInt(input)
        
    if (inputNumber < 1 || inputNumber > 10) {
        alert('Please enter a correct number')
    } else {
        // alert(`The number is ${inputNumber}`)
        useRequest(`https://picsum.photos/v2/list?limit=${inputNumber}`, displayResult);
    }
};  



function useRequest (url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (xhr.status != 200) {
            console.log("The status of request is: ", xhr.status)
        } else {
            const result = JSON.parse(xhr.response);
            if (callback) {
                callback(result);
            }
        };
    };

    xhr.onerror = function() {
        console.log("Error! The status of request is: ", xhr.status)
    };

    xhr.send();

};

function displayResult(apiData) {
    let cards = "";
    apiData.forEach(item => {
        const cardBlock = `
            <div>
                <img
                    src="${item.download_url}"
                    class="card-image"
                />
            </div>`;
        cards += cardBlock;
    });
    resultNode.innerHTML = cards;
  }

//   function displayResult2(apiData) {  
//     apiData.forEach(item => {
//         let new_card = createNewCard(item.download_url);
//         resultNode.appendChild(new_card);
//     });
//   }


// function createNewCard(url) {
//     /**
//      * Function returns a <div> element with an <img> element of given source-url
//      * 
//      *  <div><img src="url" class="card-image"></div>
//      */
//     let div = document.createElement("div");
//     let img = document.createElement("img");

//     img.setAttribute("src", url);
//     img.classList.add("card-image");

//     div.appendChild(img);

//     return div;
// }