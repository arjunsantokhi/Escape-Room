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

<<<<<<< HEAD
scrollingText(".text", "Hello, you might not know who you are. But all you need to know is that you need to get out. There should be a key somewhere in this empty room. ", 75 );
=======
scrollingText(".text", `Hello, you might not know who you are.`, 75 );


 setTimeout(() => {
     scrollingText(".text", "hahaha", 75 );
 }, 75*38);


>>>>>>> 6271ad16b844e9b42bb8318a36cde95e12a9740b
