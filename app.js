var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#output");

var serverUrl="https://api.funtranslations.com/translate/minion.json";


function getTranslationURL(userInput)
{
    return serverUrl + "?" + "text=" + userInput;
}

function errorHandler(error)
{
    console.log("error occured", error);
    alert("The Minion is full or your food is stale, Kindly try again in sometime :/")
}


function clickEventHandler()
{   
    txtOutput.scrollIntoView();
    //taking input to send to server
    var InputText = txtInput.value;

    //calling the server to process the input
    fetch(getTranslationURL(InputText))
    .then(response => response.json())
    .then(json => {
        //output the translated text
        txtOutput.innerText = json.contents.translated;
        console.log(json.contents.translated)
    })
    .catch(errorHandler);
};
// txtInput.addEventListener("keypress", (event)=> {
//     if (event.keyCode === 13) { // key code of the keybord key
//       event.preventDefault();
//         hello()
//         txtOutput.scrollIntoView();
//     }
// });

txtInput.addEventListener('keypress', function hello(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        hello2()
        txtOutput.scrollIntoView();
    }
});

function hello2() { console.log("enter key pressed!"); clickEventHandler();};

btnTranslate.addEventListener("click", clickEventHandler)