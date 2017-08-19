console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML="New value";

// move image to left

var img = document.getElementById('modi');
var marginLeft =0;
var marginUp = 0;
var marginRight =0;
var marginDown = 0;
function moveRight(){
    if (marginLeft>=0 && marginLeft < 61){
        marginRight = 0;
        marginUp = 0;
        marginDown = 0;
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + "px";}
    if (marginLeft > 60){
        marginUp = marginUP + 5;
        img.style.marginUp = marginUp + "px";
    }
    if (marginUp > 60){
        marginLeft = 10;
        marginRight = marginRight + 5;
        img.style.marginRight=marginRight + "px";
    }
    if (marginRight > 60){
        marginUp = 0;
        marginDown = marginDown + 5;
        img.style.marginDown = marginDown + "px";
    }
        
        
}
    
img.onclick = function() {
    var interval = setInterval(moveRight,50);
};