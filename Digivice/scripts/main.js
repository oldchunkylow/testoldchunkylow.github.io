var stats = {
    name: null,
    stage: 1,
    monType: "mon-1",
    happiness: 0,
    strength: 0,
    effort: 0,
    hunger: 0,
    mistakes: 0
}

var counters = {
    mistakeCounter: 0
}

var monNameList = [
    {
        name: "Plopper",
        quotes: ["Ploppy!", "Munchies Time!", "Ho!", "Burp!"]
    },
    {
        name: "Blobber",
        quotes: ["Sup.", "Mroowww", "supercalifragilisticexpialidocious.", "Shoo."]
    }
];

var monImage = document.getElementsByClassName('monImage')[0];
var monsterHappySprite = "images/" + stats.monType + "/" + "stage-" + stats.stage + "/happy.gif";
var monsterNormalSprite = "images/" + stats.monType + "/" + "stage-" + stats.stage + "/normal.gif";
var monsterSadSprite = "images/" + stats.monType + "/" + "stage-" + stats.stage + "/sad.gif";
var monsterEatSprite = "images/" + stats.monType + "/" + "stage-" + stats.stage + "/eat.gif";
var monsterAngrySprite = "images/" + stats.monType + "/" + "stage-" + stats.stage + "/angry.gif";
var digiScreen = document.getElementsByClassName('digiScreen')[0];
var foodSprite = document.getElementsByClassName('foodAnimate')[0];
var trainingSprite = document.getElementsByClassName('trainingAnimate')[0];
var playingSprite = document.getElementsByClassName('playingAnimate')[0];
var digiScreenSet1 = document.getElementById('digiScreenSet-1');
var digiScreenSet2 = document.getElementById('digiScreenSet-2');
var digiMenuItemContainer = document.getElementById('menuItemContainer-1');
var digiNameContainer = document.getElementById('menuItemContainer-2');
var digiQuoteContainer = document.getElementById('menuItemContainer-3');
var digiNameText = document.getElementsByClassName('nameText')[0];
var digiQuoteText = document.getElementsByClassName('quoteText')[0];
var digiButtonSet1 = document.getElementById('digiButtonSet-1');
var digiButtonSet2 = document.getElementById('digiButtonSet-2');
var digiButtonSet3 = document.getElementById('digiButtonSet-3');
var menuIcons = document.getElementsByClassName('menuIcon');

var hungerCountdown = setInterval(increaseHunger, 10000);
var hungerMoodChanger = setInterval(changeHungerMood, 5000);
var mistakeChecker = setInterval(mistakeCheck, 5000);

function updateSprites() {
    monsterHappySprite = "images/" + stats.monType + "/" + "stage-" + stats.stage + "/happy.gif";
    monsterNormalSprite = "images/" + stats.monType + "/" + "stage-" + stats.stage + "/normal.gif";
    monsterSadSprite = "images/" + stats.monType + "/" + "stage-" + stats.stage + "/sad.gif";
    monsterEatSprite = "images/" + stats.monType + "/" + "stage-" + stats.stage + "/eat.gif";
    monsterAngrySprite = "images/" + stats.monType + "/" + "stage-" + stats.stage + "/angry.gif";
}

function runAnimation() {
    monImage.style.animation = "run linear infinite 4s";
}

function jumpAnimation() {
    monImage.style.animation = "jump step-end 5 0.6s";
    console.log("jumping");
}

function screenFlash() {
    digiScreen.style.animation = "screenFlash step-end infinite 0.5s";
}

function clearScreenFlash() {
    digiScreen.style.animation = "none";
}

function evolveAnimation() {
    monImage.style.animation = "evolve linear 6 0.5s";
}

function nextStage() {
    stats.stage += 1;
}

function happyMon() {
    monImage.setAttribute('src', monsterHappySprite);
}

function normalMon() {
    monImage.setAttribute('src', monsterNormalSprite);
}

function sadMon() {
    monImage.setAttribute('src', monsterSadSprite);
}

function eatMon() {
    monImage.setAttribute('src', monsterEatSprite);
}

function angryMon() {
    monImage.setAttribute('src', monsterAngrySprite);
}

function makeHappyMon() {
    happyMon();
    setTimeout(runAnimation, 3000);
}

function makeEatMon() {
    monImage.style.animation = "none";
    eatMon();
    setTimeout(runAnimation, 3000);
}

function makeAngryMon() {
    angryMon();
    setTimeout(runAnimation, 3000);
}

function showFood() {
    foodSprite.className = foodSprite.className.replace(" inactive", " active");
}

function hideFood() {
    foodSprite.className = foodSprite.className.replace(" active", " inactive");
}

function eatFood() {
    showFood();
    setTimeout(hideFood, 3000);
}

function showTraining() {
    trainingSprite.className = trainingSprite.className.replace(" inactive", " active");
}

function hideTraining() {
    trainingSprite.className = trainingSprite.className.replace(" active", " inactive");
}

function doTraining() {
    showTraining();
    setTimeout(hideTraining, 3000);
}

function showPlaying() {
    playingSprite.className = playingSprite.className.replace(" inactive", " active");
}

function hidePlaying() {
    playingSprite.className = playingSprite.className.replace(" active", " inactive");
}

function startPlaying() {
    showPlaying();
    setTimeout(hidePlaying, 3000);
}

function minMaxStat(thisStat, max, min) {
    if (stats[thisStat] > max) {
        stats[thisStat] = max;
    } else if (stats[thisStat] < min) {
        stats[thisStat] = min;
    }
}

function minMaxAllStats() {
    minMaxStat("hunger", 10, 0);
    minMaxStat("happiness", 10, 0);
    minMaxStat("strength", 10, 0);
    minMaxStat("effort", 10, 0);
}

function showStats() {
    console.log("Happiness: " + stats.happiness + " Effort: " + stats.effort + " Strength: " + stats.strength + " Hunger: " + stats.hunger + " Mistakes: " + stats.mistakes);
}

function selectEatFood() {
    stats.hunger -= 3;
    stats.effort += 0.25
    makeEatMon();
    eatFood();
    minMaxAllStats();
    showStats();
    evolveMon();
}

function selectTrain() {
    stats.strength += 1;
    stats.hunger += 1;
    stats.effort += 0.5
    minMaxAllStats();
    showStats();
    jumpAnimation();
    makeAngryMon();
    doTraining();
    evolveMon();
}

function selectPlay() {
    stats.happiness += 1;
    stats.effort += 0.25
    minMaxAllStats();
    showStats();
    jumpAnimation();
    makeHappyMon();
    startPlaying();
    evolveMon();
}


function addEffort() {
    stats.effort += 1;
    minMaxAllStats();
    showStats();
    makeHappyMon();
    evolveMon();
}

function changeHungerMood() {
    if (stats.hunger < 5) {
        happyMon();
        console.log("I'm happy!");
    } else if (stats.hunger <= 5 && stats.hunger < 10) {
        console.log("I'm ok...");
        normalMon();
    } else if (stats.hunger >= 10 && counters.mistakeCounter < 5) {
        console.log("I'm hungry!");
        sadMon();
    } else if (stats.hunger >= 10 && counters.mistakeCounter >= 5) {
        angryMon();
    }
    return;
}

function increaseHunger() {
    if (stats.hunger < 10) {
        stats.hunger += 1;
        minMaxAllStats();
    }
}
var buttonA = document.getElementById('button-A');
var buttonB = document.getElementById('button-B');
var buttonC = document.getElementById('button-C');
var buttonA2 = document.getElementById('button-A-2');
var buttonB2 = document.getElementById('button-B-2');
var buttonC2 = document.getElementById('button-C-2');
var buttonA3 = document.getElementById('button-A-3');
var buttonB3 = document.getElementById('button-B-3');
var buttonC3 = document.getElementById('button-C-3');

buttonA.addEventListener('click', openFoodMenu);
buttonB.addEventListener('click', talkToMe);
buttonC.addEventListener('click', openNameMenu);
buttonB2.addEventListener('click', selectMenuAction);
buttonA2.addEventListener('click', navigateItem);
buttonC2.addEventListener('click', closeFoodMenu);
buttonA3.addEventListener('click', openFoodMenu);
buttonB3.addEventListener('click', closeNameMenu);
buttonC3.addEventListener('click', closeNameMenu);


function evolveMon() {
    if (stats.stage === 1 && stats.happiness >= 5 && stats.effort >= 5 && stats.strength >= 5) {
        stats.stage += 1;
        evolveAnimation();
        screenFlash();
        updateSprites();
        updateName();
        setTimeout(clearScreenFlash, 3000);
        setTimeout(normalMon, 6000);
        console.log("Congratulations, I have evolved to " + "Stage " + stats.stage + "!");
    } else if (stats.stage === 2 && stats.happiness >= 10 && stats.effort >= 10 && stats.strength >= 10) {
        stats.stage = "stage-3";
        console.log("Congratulations, I have evolved to " + stats.stage + "!");
    }
}

function mistakeCheck() {
    if (stats.hunger >= 10 && counters.mistakeCounter < 10) {
        counters.mistakeCounter += 1;
        console.log("Mistake Counter: " + counters.mistakeCounter);
    } else if (stats.hunger >= 10 && stats.mistakeCounter >= 10) {
        stats.mistakes += 1;
        counters.mistakeCounter = 0;
        console.log("Mistakes: " + stats.mistakes + " Mistake Counter: " + counters.mistakeCounter);
    }
    return;
}

function pauseCounters() {
    clearInterval(hungerCountdown);
    clearInterval(hungerMoodChanger);
    clearInterval(mistakeChecker);
}

function resumeCounters() {
    hungerCountdown = setInterval(increaseHunger, 10000);
    hungerMoodChanger = setInterval(changeHungerMood, 5000);
    mistakeChecker = setInterval(mistakeCheck, 5000);
}

function openFoodMenu() {
    digiMenuItemContainer.className = digiMenuItemContainer.className.replace(" hide", " show");
    digiNameContainer.className = digiNameContainer.className.replace(" show", "  hide");
    digiQuoteContainer.className = digiQuoteContainer.className.replace(" show", "  hide");
    digiButtonSet1.className = digiButtonSet1.className.replace(" active", " inactive");
    digiButtonSet2.className = digiButtonSet2.className.replace(" inactive", " active");
    digiButtonSet3.className = digiButtonSet1.className.replace(" active", " inactive");
}

function closeFoodMenu() {
    digiMenuItemContainer.className = digiMenuItemContainer.className.replace(" show", "  hide");
    digiButtonSet1.className = digiButtonSet1.className.replace(" inactive", " active");
    digiButtonSet2.className = digiButtonSet2.className.replace(" active", " inactive");
}

function openNameMenu() {
    digiNameContainer.className = digiNameContainer.className.replace(" hide", " show");
    digiQuoteContainer.className = digiQuoteContainer.className.replace(" show", "  hide");
    digiButtonSet1.className = digiButtonSet1.className.replace(" active", " inactive");
    digiButtonSet3.className = digiButtonSet3.className.replace(" inactive", " active");
    updateName();
}

function closeNameMenu() {
    digiNameContainer.className = digiNameContainer.className.replace(" show", "  hide");
    digiButtonSet1.className = digiButtonSet1.className.replace(" inactive", " active");
    digiButtonSet3.className = digiButtonSet3.className.replace(" active", " inactive");
}

function openQuoteMenu() {
    digiQuoteContainer.className = digiQuoteContainer.className.replace(" hide", " show");
}

function closeQuoteMenu() {
    digiQuoteContainer.className = digiQuoteContainer.className.replace(" show", " hide");
}

function navigateItem() {
    if (menuIcons[0].classList.contains('selected')) {
        menuIcons[0].classList.remove('selected');
        menuIcons[1].classList.add('selected');
    } else if (menuIcons[1].classList.contains('selected')) {
        menuIcons[1].classList.remove('selected');
        menuIcons[2].classList.add('selected');
    } else if (menuIcons[2].classList.contains('selected')) {
        menuIcons[2].classList.remove('selected');
        menuIcons[0].classList.add('selected');
    }
    return;
}

function selectMenuAction() {
    if (menuIcons[0].classList.contains('selected')) {
        selectEatFood();
    } else if (menuIcons[1].classList.contains('selected')) {
        selectTrain();
    } else if (menuIcons[2].classList.contains('selected')) {
        selectPlay();
    }
    return;
}

function updateName() {
    var namePosition = stats.stage - 1;
    stats.name = monNameList[namePosition].name;
    digiNameText.innerHTML = "Name: " + stats.name;
}

var speechTimeCounter = 0;
var speechCounterInterval;


function talkToMe() {
    if (digiQuoteContainer.classList.contains('hide')) {
        initiateSpeech();
        monImage.style.animation = "none";
        makeHappyMon();
        setTimeout(closeQuoteMenu, 5000);
    }
}

function initiateSpeech() {
    openQuoteMenu();
    var namePosition = stats.stage - 1;
    var selectQuote = Math.floor(Math.random() * monNameList[namePosition].quotes.length);
    var selectedQuote = monNameList[namePosition].quotes[selectQuote];
    console.log(selectedQuote);
    digiQuoteText.innerHTML = "\u0022" + selectedQuote + "\u0022";
}
