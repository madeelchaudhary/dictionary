let wordForm = document.querySelector('.wordForm');

wordForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let wordDef = document.getElementById('wordDef').value;
    if (wordDef.length >= 4) {
        // xhrWord.setRequestHeader('Content-type', 'application/x-form-urlencoded')
        const word = wordDef;

        const xhrWord = new XMLHttpRequest();
        xhrWord.open('GET', `https://www.dictionaryapi.com/api/v3/references/learners/json/${word}?key=f0f845f7-d3d9-46c1-a6f0-810a5ca578e6`);

        xhrWord.onload = function () {

            let wordArray = JSON.parse(this.response);
            showindom(wordArray)

        }
        wordForm.reset();
        xhrWord.send();
    }

    else {
        document.querySelector('.messages').innerHTML = `<div class="message-Danger message"> <p> <b>Message: </b> Please fill all the fields correctly</p></div>`
        setTimeout(() => {
            document.querySelector('.messages').innerHTML = ""
        }, 1400);
    }
})

function showindom(wordArray) {
    let wordDef = wordArray[0].shortdef[0];
    let wordContent = document.querySelector('.wordContent');
    wordContent.innerHTML = wordDef;
    wordContent.style.display = "block";


}


