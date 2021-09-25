//overlay loader
var overlay = document.querySelector('body>.overlay');

window.addEventListener('load', function(){
    overlay.classList.add('loaded');
});

//cursor
var cursor = document.getElementById('customCursor');
document.addEventListener('mousemove', function(e){
    var cursorWidth = cursor.offsetWidth;
    var x = e.clientX - cursorWidth/2;
    var y = e.clientY - cursorWidth/2;
    cursor.style.transform = 'translate('+x+'px, '+y+'px)';
});
var links = document.querySelectorAll('.cursor-link');
for (let i = 0; i < links.length; i++) {
    const link = links[i];
    link.addEventListener('mouseover', function(){
        cursor.classList.add('on-link');
    });
    link.addEventListener('mouseout', function(){
        cursor.classList.remove('on-link');
    })
}



//slider
var sliders = document.querySelector('.content .right .sliders');
var next = document.querySelector('.navigationSlider .next');
var prev = document.querySelector('.navigationSlider .prev');
var activeSlideId = parseInt(sliders.dataset.active);
next.addEventListener('click', function(e){
    e.preventDefault();
    prev.classList.remove('disabled');
    activeSlideId = activeSlideId < 2 ? activeSlideId+1 : 2;
    sliders.dataset.active = activeSlideId;
    if(activeSlideId == 2){
        e.target.classList.add('disabled');
    }
    else{
        e.target.classList.remove('disabled');
    }
    if(activeSlideId > 0){
        prev.classList.remove('disabled')
    }
});
prev.addEventListener('click', function(e){
    e.preventDefault();
    activeSlideId = activeSlideId > 0 ? activeSlideId-1 : 0;
    sliders.dataset.active = activeSlideId;
    if(activeSlideId == 0){
        e.target.classList.add('disabled');
    }
    else{
        e.target.classList.remove('disabled');
    }
    if(activeSlideId < 2){
        next.classList.remove('disabled')
    }
});
//expand slider
var slideItems = document.querySelectorAll('.sliders .slide');
for (let i = 0; i < slideItems.length; i++) {
    const slide = slideItems[i];
    slide.addEventListener('click', function(){
        // sliders.classList.add('expanded');
    })
}




// scrooll to down
function downIntoView() {
    document.getElementById('down').scrollIntoView();
}
document.querySelector('.header .scrollDown span').addEventListener('click', downIntoView);
document.querySelector('.header .mouseShape').addEventListener('click', downIntoView);