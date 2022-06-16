var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#output");

function clickEventHandler()
{
    txtOutput.innerText = "hjfhdjfhdfu : " + txtInput.value;
}

btnTranslate.addEventListener("click", clickEventHandler)