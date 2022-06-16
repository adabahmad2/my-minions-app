var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#output");

var serverUrl="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

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


btnTranslate.addEventListener("click", clickEventHandler)