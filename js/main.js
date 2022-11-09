//vars
const choices = document.querySelectorAll(".choice");
const input = document.querySelector(".input");
const badEnding = document.querySelector('.bad-ending');
const choiceB = document.querySelector('.choice-2B-1');
const back = document.querySelector(".back")

//default values
let done = false;
input.style.display = "none"
let tries = 2;//formula: tries + 1  dit zijn 3 tries
let speed = 40;
let ownKey = false;
let understood = false;

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



scrollingText(".text", "Hello, you might not know who you are. But all you need to know is that you need to get out. ", speed );

setTimeout(() => {
    scrollingText(".text", "There should be a key somewhere in this empty room.", speed );
}, speed*110);

setTimeout(function(){
    document.querySelector('.text').innerHTML = "";
}, speed*175);

setTimeout(() => {
    scrollingText(".summaryText", "You wake up in an empty room", speed );
}, speed*200);

setTimeout(() => {
    scrollingText(".summaryText", "all alone. The only thing in front of you is a computer with a single application", speed );
}, speed*240);

setTimeout(() => {
    scrollingText(".summaryText", "you can see a key lying on the floor", speed );
}, speed*330);

setTimeout(() => {
    scrollingText(".choice-1-1", " Walk to the door", speed );
}, speed*370);

setTimeout(() => {
    scrollingText(".choice-2-1", " Grab the key", speed );
}, speed*400);

setTimeout(() => {
    scrollingText(".choice-3-1", ' "What?" ', speed );
}, speed*430);

//choice 1
function choiceOneClick()
{
    console.log("clicked 1");

    document.querySelector('.text').innerHTML = "";
    document.querySelector('.summaryText').innerHTML = "";
    document.querySelector('.choice-1-1').innerHTML = "";
    document.querySelector('.choice-2-1').innerHTML = "";
    document.querySelector('.choice-3-1').innerHTML = "";
    document.querySelector('.choice-2B-1').innerHTML = "";
    scrollingText(".text", "You walk to the door, only to find a keyboard, somehow you recognize the language.", speed );
    setTimeout(() => {
        input.style.display = "block"; 
        scrollingText(".back", "Back.", speed );
    }, speed*65); 
    back.style.display = "block";

    
}

function backClick() {
    document.querySelector('.text').innerHTML = "";
    back.style.display = "none";
    input.style.display = "none";

    scrollingText(".summaryText", "You wake up in an empty room", speed );

    setTimeout(() => {
        scrollingText(".summaryText", "all alone. The only thing in front of you is a computer with a single application", speed );
    }, speed*40);
    

    if(ownKey == true) {

        setTimeout(() => {
            scrollingText(".summaryText", "you have a key in your hand", speed );
        }, speed*140);
        
    }
    else {
        setTimeout(() => {
            scrollingText(".summaryText", "you can see a key lying on the floor", speed );
        }, speed*140);
    }
    
    setTimeout(() => {
        scrollingText(".choice-1-1", " Walk to the door", speed );
    }, speed*170);
    
    if(ownKey == true ) {
        setTimeout(() => {
            scrollingText(".choice-2B-1", " break the key", speed );
            back.style.display = "block";
        }, speed*200); 
    }
    else {
        setTimeout(() => {
            scrollingText(".choice-2-1", " Grab the key", speed );
        }, speed*200);
    }
    if (understood == true ) {
        document.querySelector('.choice-3-1').innerHTML = "";
    }
    else { 
        setTimeout(() => {
            scrollingText(".choice-3-1", ' "What?" ', speed );
        }, speed*230);
    }
    document.querySelector('.back').innerHTML = "";

}

function choiceTwoClick()
{
    document.querySelector('.text').innerHTML = "";
    document.querySelector('.summaryText').innerHTML = "";
    document.querySelector('.choice-1-1').innerHTML = "";
    document.querySelector('.choice-2-1').innerHTML = "";
    document.querySelector('.choice-3-1').innerHTML = ""; 

    console.log("clicked 2");
    scrollingText(".text", "You find a key on the floor, it feels rather brittle.", speed);


    setTimeout(() => {
        document.querySelector('.text').innerHTML = "";
        scrollingText(".summaryText", "You wake up in an empty room", speed );
    }, speed*80);
    
    setTimeout(() => {
        scrollingText(".summaryText", "all alone. The only thing in front of you is a computer with a single application", speed );
    }, speed*120);
    
    setTimeout(() => {
        scrollingText(".summaryText", "you have a key in your hand", speed );
    }, speed*210);
    
    setTimeout(() => {
        scrollingText(".choice-1-1", " Walk to the door", speed );
    }, speed*250);
    
    setTimeout(() => {
        scrollingText(".choice-2B-1", " break the key", speed );
        back.style.display = "block";
    }, speed*280); 

    if (understood == true ) {
        document.querySelector('.choice-3-1').innerHTML = "";
    }
    else { 
        setTimeout(() => {
            scrollingText(".choice-3-1", ' "What?" ', speed );
        }, speed*530);
    }

    


    ownKey = true;
}

function choiceBClick() {

    console.log("goeie knop");
    document.querySelector('.text').innerHTML = "";
    document.querySelector('.summaryText').innerHTML = "";
    document.querySelector('.choice-1-1').innerHTML = "";
    document.querySelector('.choice-2-1').innerHTML = "";
    document.querySelector('.choice-2B-1').innerHTML = "";
    document.querySelector('.choice-3-1').innerHTML = "";

    document.querySelector('.summaryText').style.display = "none";
    document.querySelector('.choice-1-1').style.display = "none";
    document.querySelector('.choice-2-1').style.display = "none";
    document.querySelector('.choice-2B-1').style.display = "none";
    document.querySelector('.choice-3-1').style.display = "none";

    scrollingText(".text", "You break the key, its brittle, dust particles fly through the room. You find that glowing text appears spelling: “i'm as swift as a coyote, i sting like a bee and carve like a beaver, what am i?” ", speed );
    
    
    setTimeout(() => {
        scrollingText(".back", "Back.", speed );
    }, speed*225); 

    back.style.display = "block";
    

}

function choiceTreeClick()
{
    console.log("clicked 3");

    document.querySelector('.text').innerHTML = "";
    document.querySelector('.summaryText').innerHTML = "";
    document.querySelector('.choice-1-1').innerHTML = "";
    document.querySelector('.choice-2-1').innerHTML = "";
    document.querySelector('.choice-3-1').innerHTML = "";

    scrollingText(".text", "Hello, you might not know who you are. But all you need to know is that you need to get out. ", speed );

setTimeout(() => {
    scrollingText(".text", "There should be a key somewhere in this empty room.", speed );
}, speed*110);

setTimeout(() => {
    document.querySelector('.text').innerHTML = "";
}, speed*175);

setTimeout(() => {
    scrollingText(".summaryText", "You wake up in an empty room", speed );
}, speed*200);

setTimeout(() => {
    scrollingText(".summaryText", "all alone. The only thing in front of you is a computer with a single application", speed );
}, speed*240);

if(ownKey == true) {

    setTimeout(() => {
        scrollingText(".summaryText", "you have a key in your hand", speed );
    }, speed*330);
    
}
else {
    setTimeout(() => {
        scrollingText(".summaryText", "you can see a key lying on the floor", speed );
    }, speed*330);
}


setTimeout(() => {
    scrollingText(".choice-1-1", " Walk to the door", speed );
}, speed*370);

if(ownKey == true ) {
    setTimeout(() => {
        scrollingText(".choice-2B-1", " break the key", speed );
        back.style.display = "block";
    }, speed*280); 
}
else {
    setTimeout(() => {
        scrollingText(".choice-2-1", " Grab the key", speed );
    }, speed*400);
}

understood = true
}

if(choices[0])
{
    choices[0].addEventListener('click', choiceOneClick)
}

if(choices[1])
{
    choices[1].addEventListener('click', choiceTwoClick)
}

if(choices[3])
{
    choices[3].addEventListener('click', choiceTreeClick)
}

if(choiceB) {
    choiceB.addEventListener('click', choiceBClick);
}

if(back) {
    back.addEventListener('click', backClick);
}

function testInput(event){
    if(event.key == "Enter")
    {
        if(tries > 0)
        {
            if(input.value == "Hummingbird" || input.value == "ummingbird") {
                document.querySelector('.text').innerHTML = "";
                document.querySelector('.back').innerHTML = "";
                input.style.display = "none";
                scrollingText(".text", "correct, you opened the door and walk out of it", speed );
            }
            else{
                document.querySelector('.text').innerHTML = "";
                tries --;
                scrollingText(".text", "wrong, you have " + (tries + 1) + " tries left", speed );
            }
        }
        else {
            document.querySelector('.text').innerHTML = "";
            back.style.display = "none";
                input.style.display = "none";
                badEnding.style.display = "block";
                scrollingText(".text", "you were wrong three times. The door is permanently locked. That wasn't supposed to happen. I'm sorry, there's nothing I can do for you", speed )
                setTimeout(() => {
                    document.querySelector('.text').innerHTML = "";
                    scrollingText(".bad-ending", "you're stuck", speed );
                }, speed*150);

    
        }
        
    }
}

if(input)
{
    input.addEventListener('keydown', testInput)
}



 



