var easyW = ["jazz","heavy","bigger","apple","airplane","bird","tree","grape","necklace","banana","game","fruit"];
var mediumW = ["teleport","ferment","feelings","something","trouble","disastrously","laptop","chance","rap","office","secret","table"];
var hardW = ["beautiful","organ","acrobat","mathematics","awkward","backpack","masterpiece","asteroid","inducted","straight","capable","omnipotent"];
var insaneW = ["indecent","bagpipes","banjo","bungler","croquet","crypt","dwarves","wildebeest","twelfth","haphazard","fjord","phlegm"];
var word = "";
var lives = 6;
var livesLost = 0;
var guessedLetters = [];



function onSubmit(){
    var letter = document.getElementById("Letter").value;
    var output = "";
    if(guessedLetters.indexOf(letter) == -1){
        guessedLetters.push(letter);
        if(word.indexOf(letter) == -1){
            livesLost++;
        }
        document.getElementById("check").innerHTML = "";
        if(livesLost == lives){
            document.getElementById("lose").innerHTML = "Sorry you lose... Better luck next time!"
            document.getElementById("wordwas").innerHTML = "The word was: " + word;
        }
    }
    else{
        document.getElementById("check").innerHTML = "You used this letter... Guess again!";
    }
    for(var i = 0; i < word.length; i++){
        if(guessedLetters.indexOf(word[i]) > -1){
            output += word[i];
        }
        else{
            output += " _";
        }
    }
    console.log(output)
    console.log(word)
    if(output == word){
        document.getElementById("win").innerHTML = "CONGRATULATIONS YOU WIN!"
        if(word == "bird"){
            document.getElementById("wordwas").innerHTML = "Ah well a bird bird bird, b-bird's the word";
        }
    }
    document.getElementById("guessedLetters").innerHTML = "Letters Guessed: " + guessedLetters;
    document.getElementById("word").innerHTML = output;
    document.getElementById("lives").innerHTML = "Guesses Left: " + (lives - livesLost);
}


function doIt(){
    lives = 6;
    livesLost = 0;
    guessedLetters = [];
    document.getElementById("guessedLetters").innerHTML = "";
    document.getElementById("word").innerHTML = "";
    document.getElementById("lives").innerHTML = "";
    document.getElementById("win").innerHTML = "";
    document.getElementById("lose").innerHTML = "";
    document.getElementById("check").innerHTML = "";
    document.getElementById("wordwas").innerHTML = "";
    document.getElementById("output1").innerHTML = determineDif();
    var changeWord = "";
    for(var i = 0; i < word.length; i++){
        changeWord += " _";
    }
    document.getElementById("word").innerHTML = changeWord;
    document.getElementById("output1").style.visibility = "hidden";
}

function determineDif(){
    var  dif = document.getElementById("Difficulty").value;
    switch(dif){
        case "1":
            word = easyW[Math.floor(Math.random() * easyW.length)];
            return word;

        case "2":
            word = mediumW[Math.floor(Math.random() * mediumW.length)];
            return word;

        case "3":
            word = hardW[Math.floor(Math.random() * hardW.length)];
            return word;

        case "4":
            word = insaneW[Math.floor(Math.random() * insaneW.length)];
            return word;
    }
}