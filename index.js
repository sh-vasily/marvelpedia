const API_URL = "https://gateway.marvel.com/v1/public";
const API_KEY = "a059e10e4ca48902af649618f721f1ce";
const API_HASH = "d785528519dff7b531c81213327c27b1";


function getCharacters() {
    const requestUrl = new URL(`${API_URL}/characters`);

    requestUrl.searchParams.set('apikey', API_KEY);
    requestUrl.searchParams.set('hash', API_HASH);
    requestUrl.searchParams.set('ts', 1);

    let textField = document.getElementById("characters");

    const requestMethod = "GET";
    const request = new XMLHttpRequest();

    request.open(requestMethod, requestUrl); 
    request.onload = () => textField.textContent = request.response;
    request.send();
};

getCharacters();