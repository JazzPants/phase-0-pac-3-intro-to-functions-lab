function shout(x){
    return x.toUpperCase();
}
//receives one argument and returns it in all caps

function whisper(x){
    return x.toLowerCase();
}

function logShout(x){
    console.log(x.toUpperCase());
}

function logWhisper(x){
    console.log(x.toLowerCase());
}

function sayHiToGrandma(x){
    if (x === x.toUpperCase()) {
        return ("YES INDEED!");
    }
    else if (x.toLowerCase() === x) {
        return ("I can't hear you!");
    }
    else if (x === "I love you, Grandma.") {
        return ("I love you, too");
    }
    

}