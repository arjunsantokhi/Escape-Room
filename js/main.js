function scrollingText(className, message, speed){
    let i = 0;
    let interval = setInterval(function(){
        document.querySelector(className).innerHTML += message.charAt(i);
        i++;
        if (i > message.length){
            clearInterval(interval);
        }
    }, speed);
}

scrollingText(".msg", "HALLO DIT IS EEN TEXT JAJAJAJAJAJAJAAJAJAJAJAJAJAJAJAJAJAAJAJAJAJAJAJAJAJAJAJAJA", 100);