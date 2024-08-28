function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function myBars() {
    let bars = document.querySelector("#bar");
    let nav = document.querySelector(".navigation");
    bars.onclick = function () {
        if (nav.style.right == "0%") {
            nav.style.right = "-50%";
            bars.src = "/images/menu.png"
        } else {
            nav.style.right = "0%";
            bars.src = "/images/x.png"
        }
        nav.classList.toggle("new")
    }

}
myBars()

function myHeader() {
    let lol = document.getElementById("lol");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            header.classList.add("active");
            lol.src = "images/bulb2.png";
        } else {
            header.classList.remove("active");
            lol.src = "pic/bulb.png";
        }

    })
}

