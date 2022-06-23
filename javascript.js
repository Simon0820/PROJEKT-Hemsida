function openLinkedin(){
    window.open('https://www.linkedin.com/in/therese-brunzell-120aba/', '_blank')
}

function hideText(){
    var x = document.getElementsByClassName("middle-div");
    var items = x[0];

    items.style.display = "none";

}

function showText(){
    var x = document.getElementsByClassName("middle-div");
    var items = x[0];
    
    items.style.display = "block";
}

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        var x = document.getElementsByClassName("top-div");
        var div = x[0];

        div.style.top = "0";
    }
    else{
        var x = document.getElementsByClassName("top-div");
        var div = x[0]
        div.style.top = "-50px";
    }
}