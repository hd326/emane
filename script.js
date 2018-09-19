
var index = 1;

slider();

function slideImage(a){
    index = index + a;
    slider(index);
}

function slider(a) {
    var x = document.getElementsByClassName('slides');
    var i;
    for (i = 0; i < x.length; i++) {
        if (a > x.length ){
            index = 1;
        }
        if (a < 1) {
            index = x.length;
        }
        x[i].style.display = 'none';
    }
    x[index - 1].style.display = 'block';
};

