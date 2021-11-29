function blinking_text(){
    $(".blink").fadeOut(1000);
    $(".blink").fadeIn(500);
}

setInterval(blinking_text, 1000);
