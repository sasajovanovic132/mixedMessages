/* Project Name: Mixed Messages
desc:simple program that displays random messages upon running
from: Codecademy
author: Sasa Jovanovic
date: 03/28/2021

*/
function main() {
    mixMessages();

}

function mixMessages() {

    let randomNum = Math.floor(Math.random() * 5);
    const name = () => {
        let messages = ["fun", "hard", "easy", "ehausting ", "exciting"]
        return messages[randomNum]
    };
    function name1() {
        let messages = ["budy!", " champ!", "fellow coder!", "your code!", "everything!"]
        return messages[randomNum]
    };
    function name2() {
        let messages = ["be ok.", "pay off.", "fall in place.", "come together.", "become clear."];
        return messages[randomNum]
    };

    function name3() {
        let messages = ["coding!", "playing games", "learning", "fixing buggs.", "making projects"];
        return messages[randomNum]
    };

    function name4() {
        let messages = ["World!", "universe", "Serbia, tell me how you doing", "motherland", "coders!"];
        return messages[randomNum]
    };
    let mainMessages = ["Coding is " + name() + " to learn", "Don't give up " + name1(), "Everything will " + name2(), "Let's have fun " + name3(), "Hello " + name4()]

    console.log(mainMessages[randomNum]);
}
main();