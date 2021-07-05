const API_URL = "https://gateway.marvel.com/v1/public";


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