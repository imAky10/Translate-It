let inputText = document.getElementById('text');
let button = document.getElementById('btn');
let result = document.getElementById('result');
let language = document.getElementById('language');

button.addEventListener('click', getMeaning);
api_key = ""; //your api key goes here

function getMeaning() {

    if (inputText.value == '') {
        alert("The input field is empty...");
        
    }
    else {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${api_key}&text=${inputText.value}&lang=${language.value}`, true);

        xhr.onload = function () {
            if (this.status == 200) {
                var meaning = JSON.parse(this.responseText);
                console.log(meaning);

                result.innerHTML = `<h1 class="text-center text-danger">${meaning.text[0]}</h1>`;


            }
        }

        xhr.send();
    }
}

