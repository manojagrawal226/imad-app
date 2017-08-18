console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML="New value";

// move image to left

var img = document.getElementById('modi');
img.onclick = function() {
    img.style.marginLfet = '100px';
};