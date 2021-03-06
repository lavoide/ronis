onload = function() {
    var e, i = 0;
    e = document.getElementById('range').getElementsByTagName ('div');
    while (e[i++]) {
        e.onmouseover = function () {
            clearTimeout(t);
        };

        e.onmouseout = function () {
            t=setTimeout("timedCount()",timeOut);
        }
    }
};

var c=0;
timeOut = 5000;
var t;
t=setTimeout("timedCount()",timeOut);

function timedCount() {
    var getImage = document.getElementById('range').getElementsByTagName('div');
    var img = getImage.length-1;
    for (var a=0; a<getImage.length; a++) {
        if (getImage[a].className === 'slide active') {
            getImage[a].className = 'slide inactive';
            c = a;
        }
    }
    c++;
    if (c>img) {c=0;}
    getImage[c].className = 'slide active';
    t=setTimeout("timedCount()",timeOut);
}

function validateEmail(event) {
    event.preventDefault();
    email = event.target[0].value;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(email).toLowerCase())){
        alert('Thank you!'); event.target[0].value = '';
    } else {
        alert('Enter correct email!');
        event.target[0].value = '';
    }
}
