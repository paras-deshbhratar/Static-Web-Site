function validate() {
    var un = document.getElementById("un").value;
    var pwd = document.getElementById("pwd").value;
    var e = true;
    if (un.length < 8) {
        window.alert("Username should be about 8 characters");
        e = false;

    }

    var a = false,
        b = false,
        c = false,
        d = false;

    for (var i = 0; i < pwd.length; i++) {
        if (pwd[i] >= 'a' && pwd[i] <= 'z') {
            a = true;
            continue;
        }
        if (pwd[i] >= '0' && pwd[i] <= '9') {
            b = true;
            continue;
        }
        if (pwd[i] >= 'A' && pwd[i] <= 'Z') {
            c = true;
            continue;
        }
        if (pwd[i] >= '!' || pwd[i] <= '/') {
            d = true;
            continue;
        }

    }
    if (a && b && c && d && e) {
        window.alert("Login Success");
    } else {
        window.alert("Please provide valid Password");
    }

}

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('dell');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}



var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header-container").style.top = "0";
    } else {
        document.getElementById("header-container").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
}