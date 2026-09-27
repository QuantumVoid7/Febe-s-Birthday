```javascript
// ===============================================
// GO TO PHOTOS
// ===============================================

function goToPhotos() {

    document
        .getElementById("photos")
        .scrollIntoView({
            behavior: "smooth"
        });

}



// ===============================================
// GO TO LETTER
// ===============================================

function goToLetter() {

    document
        .getElementById("letter")
        .scrollIntoView({
            behavior: "smooth"
        });

}



// ===============================================
// GO BACK TO BEGINNING
// ===============================================

function goToWelcome() {

    document
        .getElementById("welcome")
        .scrollIntoView({
            behavior: "smooth"
        });

}



// ===============================================
// FLOATING HEARTS
// ===============================================

function createHeart() {

    const heart =
        document.createElement("div");


    heart.className =
        "heart-float";


    if (Math.random() > 0.5) {

        heart.textContent = "♥";

    }

    else {

        heart.textContent = "♡";

    }


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        (12 + Math.random() * 25) + "px";


    heart.style.animationDuration =
        (6 + Math.random() * 7) + "s";


    document.body.appendChild(heart);


    setTimeout(
        function() {

            heart.remove();

        },
        14000
    );

}



// ===============================================
// CREATE HEARTS
// ===============================================

setInterval(
    createHeart,
    700
);


for (
    let i = 0;
    i < 10;
    i++
) {

    setTimeout(
        createHeart,
        i * 300
    );

}
```
