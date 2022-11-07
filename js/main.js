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

scrollingText(".text", `Hello, you might not know who you are.`, 75 );


 setTimeout(() => {
     scrollingText(".text", "hahaha", 75 );
 }, 75*38);

