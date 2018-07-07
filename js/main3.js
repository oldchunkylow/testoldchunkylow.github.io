var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://oldchunkylow.github.io/js/testjap.json');
ourRequest.onload = function() {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    // This is where we'll do something with the retrieved data
    var data = JSON.parse(ourRequest.responseText);
    createHTML(data);
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

var qButton = document.getElementById("generateQ");
var qContainer = document.getElementById("questionContainer");

qButton.addEventListener("click",function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://oldchunkylow.github.io/js/testjap.json');
    ourRequest.onload = function() {
        var data = JSON.parse(ourRequest.responseText);
        generateQ(data);
    };
    ourRequest.send();
});

function generateQ(wordsData){
        var selectWords = []
        var nounList = wordsData.Noun.items;
        //randomly pick 10 words
        while(selectWords.length < 2){
            var randomWord = nounList[Math.floor(Math.random() * nounList.length)]
            if(selectWords.indexOf(randomWord) > -1) continue;
            selectWords[selectWords.length] = randomWord;
        }
        document.getElementById("questionA").innerHTML = selectWords[0].EnglishWord;
        document.getElementById("answerA").innerHTML = selectWords[0].Kanji + "<br>" + selectWords[0].Hiragana;
    
        document.getElementById("questionB").innerHTML = selectWords[1].EnglishWord;
        document.getElementById("answerB").innerHTML = selectWords[1].Kanji + "<br>" + selectWords[1].Hiragana;
}

/*
function generateQ(wordsData) {
    var nounList = wordsData.Noun.items;
    var randomNoun = nounList[Math.floor(Math.random()*nounList.length)];
    console.log(randomNoun);
    var questionString ="";
    questionString = randomNoun.EnglishWord;
    qContainer.insertAdjacentHTML('beforeend',questionString);
    
}
*/