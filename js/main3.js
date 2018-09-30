var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://oldchunkylow.github.io/js/vocab.json');
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
    ourRequest.open('GET', 'https://oldchunkylow.github.io/js/vocab.json');
    ourRequest.onload = function() {
        var data = JSON.parse(ourRequest.responseText);
        generateQ(data);
    };
    ourRequest.send();
});

function generateQ(wordsData){
        var selectWords = []
        var nounList = wordsData.Test.items;
        //randomly pick 10 words
        while(selectWords.length < 10){
            var randomWord = nounList[Math.floor(Math.random() * nounList.length)]
            if(selectWords.indexOf(randomWord) > -1) continue;
            selectWords[selectWords.length] = randomWord;
        }
        document.getElementById("questionA").innerHTML = selectWords[0].EnglishWord;
        document.getElementById("answerA").innerHTML = selectWords[0].Kanji + "<br>" + selectWords[0].Hiragana;
    
        document.getElementById("questionB").innerHTML = selectWords[1].EnglishWord;
        document.getElementById("answerB").innerHTML = selectWords[1].Kanji + "<br>" + selectWords[1].Hiragana;
    
        document.getElementById("questionC").innerHTML = selectWords[2].EnglishWord;
        document.getElementById("answerC").innerHTML = selectWords[2].Kanji + "<br>" + selectWords[2].Hiragana;
    
        document.getElementById("questionD").innerHTML = selectWords[3].EnglishWord;
        document.getElementById("answerD").innerHTML = selectWords[3].Kanji + "<br>" + selectWords[3].Hiragana;
    
        document.getElementById("questionE").innerHTML = selectWords[4].EnglishWord;
        document.getElementById("answerE").innerHTML = selectWords[4].Kanji + "<br>" + selectWords[4].Hiragana;
    
        document.getElementById("questionF").innerHTML = selectWords[5].EnglishWord;
        document.getElementById("answerF").innerHTML = selectWords[5].Kanji + "<br>" + selectWords[5].Hiragana;
    
        document.getElementById("questionG").innerHTML = selectWords[6].EnglishWord;
        document.getElementById("answerG").innerHTML = selectWords[6].Kanji + "<br>" + selectWords[6].Hiragana;
    
        document.getElementById("questionH").innerHTML = selectWords[7].EnglishWord;
        document.getElementById("answerH").innerHTML = selectWords[7].Kanji + "<br>" + selectWords[7].Hiragana;
    
        document.getElementById("questionI").innerHTML = selectWords[8].EnglishWord;
        document.getElementById("answerI").innerHTML = selectWords[8].Kanji + "<br>" + selectWords[8].Hiragana;
    
        document.getElementById("questionJ").innerHTML = selectWords[9].EnglishWord;
        document.getElementById("answerJ").innerHTML = selectWords[9].Kanji + "<br>" + selectWords[9].Hiragana;
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