
let string = "Hello"

function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
} /*function just performs the action/method, but you must 
console.log(whisper(string))
outside of the function if you want to see it */

console.log(whisper(string));

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToGrandma(x) {
    if (x === x.toLowerCase()) {
        return ("I can't hear you!");
    }
    else if (x === x.toUpperCase()) {
        return ("YES INDEED!");
    }
    else if (x === "I love you, Grandma.") {
        return ("I love you, too.")
    }
}

// 'Hello!'.toUpperCase(); -----> why doesn't this print out in terminal?

    /*

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
    

*/

