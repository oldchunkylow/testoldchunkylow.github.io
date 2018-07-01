var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://oldchunkylow.github.io/js/test.json');
ourRequest.onload = function() {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    // This is where we'll do something with the retrieved data
    var data = JSON.parse(ourRequest.responseText);
      createHTML(data);
    console.log(data);
  } else {
    console.log("We connected to the server, but it returned an error.");
  }
};

ourRequest.onerror = function() {
  console.log("Connection error");
};

ourRequest.send();



function createHTML(wordsData) {
  var rawTemplate = document.getElementById("wordsTemplate").innerHTML;
  var compiledTemplate = Handlebars.compile(rawTemplate);
  var ourGeneratedHTML = compiledTemplate(wordsData);
    
    var wordsContainer = document.getElementById("words-container");
    wordsContainer.innerHTML = ourGeneratedHTML;
}

