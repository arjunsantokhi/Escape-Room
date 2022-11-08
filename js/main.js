console.log('Main loaded');

let done = false;

function scrollingText(className, message, speed){
    let i = 0;
    let interval = setInterval(function(){
        if(done == false)
        {
            document.querySelector(className).innerHTML += message.charAt(i);
            i++;
            if (i > message.length){
                clearInterval(interval);
                done = true;
                document.querySelector(className).innerHTML += "<br>";
            }
            done = false;
        }
    }, speed);
    //hoe lager het getal naast scrollingText, hoe sneller//
}



scrollingText(".text", "Hello, you might not know who you are. But all you need to know is that you need to get out. ", 75 );

setTimeout(() => {
    scrollingText(".text", "There should be a key somewhere in this empty room.", 75 );
}, 75*110);

setTimeout(function(){
    document.querySelector('.text').innerHTML = "";
}, 75*175);

setTimeout(() => {
    scrollingText(".summaryText", "You wake up in an empty room", 75 );
}, 75*200);

setTimeout(() => {
    scrollingText(".summaryText", "all alone. The only thing in front of you is a computer with a single application", 75 );
}, 75*240);

setTimeout(() => {
    scrollingText(".summaryText", "you can see a key lying on the floor", 75 );
}, 75*330);

setTimeout(() => {
    scrollingText(".choice-1-1", "> Walk to the door", 75 );
}, 75*370);

setTimeout(() => {
    scrollingText(".choice-2-1", "> Grab the key", 75 );
}, 75*400);

setTimeout(() => {
    scrollingText(".choice-3-1", '>   "What?" ', 75 );
}, 75*430);










 



