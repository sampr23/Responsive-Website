function hamburger()
{
    var x = document.getElementById("navbar-link");
    console.log(x);
    if (x.className === "navbar-link") {
        x.className += " responsive";
    } else {
        x.className = "navbar-link";
    }
}