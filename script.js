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

function darkMode()
{
    let darkModeOn = document.getElementById('dark-mode-switch-circle')
    let cardsLists = document.getElementsByClassName('news-card');
    if(darkModeOn.className === 'dark-mode-switch-circle-on'){
        document.body.style.backgroundColor = "#EEEEEE";
        document.body.style.color = "black";
        document.getElementById('darkModeStatus').innerHTML = "&nbsp - Off";
        document.getElementById('learnMore').style.backgroundColor = "#a7a7a7";
        document.getElementById('dark-mode-switch-circle').className = 'dark-mode-switch-circle';
        console.log(cardsLists);
        for(var index=0;index < cardsLists.length;index++){
            cardsLists[index].style.backgroundColor = "#a7a7a7";
        }
    }
    else
    {
        console.log('dark mode on');
        document.body.style.backgroundColor = "#333333";
        document.body.style.color = "white";
        document.getElementById('darkModeStatus').innerHTML = "&nbsp - On";
        document.getElementById('learnMore').style.backgroundColor = "rgba(255, 255, 255, 0.201)";
        document.getElementById('dark-mode-switch-circle').className = 'dark-mode-switch-circle-on';
        for(var index=0;index < cardsLists.length;index++){
            cardsLists[index].style.backgroundColor = "rgba(255, 255, 255, 0.201)";
        }
    }
}