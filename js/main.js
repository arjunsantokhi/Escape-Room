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

scrollingText(".text", "Hello, you might not know who you are. But all you need to know is that you need to get out. ", 100);