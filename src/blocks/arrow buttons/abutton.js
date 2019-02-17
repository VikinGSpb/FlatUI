var ab = document.getElementsByClassName('abutton');

function ifMouseEnterAButton(){
    this.style.background = 'white';
    this.style.color = '#4eb7a8';
    this.style.border = '2px solid #4eb7a8';
}

function ifMouseLeaveAButton() {
    this.style.background = '#e5e5e5';
    this.style.color = 'white';
    this.style.border = '2px solid #e5e5e5';
}

for( var i = 0; i < ab.length; i++){
    ab[i].onclick = function(){
        this.style.color = 'white';
        this.style.border = '2px solid #4eb7a8';
        this.style.background = '#4eb7a8';
    }
    ab[i].addEventListener("mouseenter",ifMouseEnterAButton,false);
    ab[i].addEventListener("mouseleave",ifMouseLeaveAButton,false);
}