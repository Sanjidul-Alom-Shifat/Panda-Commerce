// for disable button
function disablebutton(id) {
    document.getElementById(id).disabled = true;
}

// random color
function RandomColors(ColorId) {
    const card = document.getElementById(ColorId);
    card.addEventListener("mouseover", function () {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    card.style.backgroundColor = "#" + randomColor;
    });

    card.addEventListener("mouseout", function () {
    card.style.backgroundColor = "transparent";
    });
}

// random color
RandomColors('cardd-1');
RandomColors('cardd-2');
RandomColors('cardd-3');
RandomColors('cardd-4');
RandomColors('cardd-5');
RandomColors('cardd-6');