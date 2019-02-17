var b = document.getElementsByClassName('button');

function ifMouseEnterGreen(){
    this.style.background = '#4eb7a8';
    this.style.color = 'white';
    this.style.borderBottom = '3px solid #28a290';
}

function ifMouseLeaveGreen() {
    this.style.background = 'white';
    this.style.color = '#4eb7a8';
    this.style.borderBottom = '3px solid #28a290';
}

function ifMouseEnterRed(){
    this.style.background = '#e75735';
    this.style.color = 'white';
    this.style.borderBottom = '3px solid #bf3e1f';
}

function ifMouseLeaveRed() {
    this.style.background = 'white';
    this.style.color = '#e75735';
    this.style.borderBottom = '3px solid #bf3e1f';
}

function addElement(e) {
    var addDiv = document.createElement('div'),
        mValue = Math.max(this.clientWidth, this.clientHeight),
        sDiv = addDiv.style;

    sDiv.width  = sDiv.height = mValue + 'px';
    sDiv.left  = e.clientX - (mValue / 2) + 'px';
    sDiv.top   = e.clientY - (mValue / 2) + 'px';

    addDiv.classList.add('pulse');
    this.appendChild(addDiv);
}

for( var i = 0; i < b.length; i++){
    b[i].onclick = function(){
        this.addEventListener('click', addElement);
        this.style.borderBottom = '1px solid';
    }
    if (b[i].className.includes('green'))
    { 
        b[i].addEventListener("mouseenter",ifMouseEnterGreen,false);
        b[i].addEventListener("mouseleave",ifMouseLeaveGreen,false);
    } else {
        b[i].addEventListener("mouseenter",ifMouseEnterRed,false);
        b[i].addEventListener("mouseleave",ifMouseLeaveRed,false);
    }
}
