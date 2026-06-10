const output = document.getElementById("output");

const messages = [
    "Accessing Database...",
    "Searching criminal Profile...",
    "████████████████ 100%",
    "STATUS: SUCCESS",
    "CRIMINAL DETECTED ⚠️",
    "Name: Hamzi Ali Majaran",
    "HOBBY: Stealing window seat in bus😁 "
];

let index = 0;

function typeMessage(text, callback) {
  const line = document.createElement("div");
    line.classList.add("line");

    output.appendChild(line);

    let i = 0;

    const typing = setInterval(() => {

        line.textContent += text.charAt(i);
        i++;

        if (i >= text.length) {

            clearInterval(typing);

            setTimeout(() => {
                callback();
            }, 1000);

        }

    }, 50);
}
function showPhoto(photoId, callback) {

    const photo = document.getElementById(photoId);

    photo.style.display = "block";

    setTimeout(() => {
        photo.style.opacity = "1";
    }, 300);

    setTimeout(() => {

        photo.style.opacity = "0";

        setTimeout(() => {

            photo.style.display = "none";

            if (callback) callback();

        }, 2500);

    }, 5000);

}

function addLine(text, callback) {

    const line = document.createElement("div");

    line.classList.add("line");

    line.textContent = text;

    output.appendChild(line);

    if (callback) {
        setTimeout(callback, 1000);
    }
}


function showSequence() {

    if (index < messages.length) {

        typeMessage(messages[index], () => {

            index++;

            showSequence();

        });

    } else {

        addLine("CRIME #1: Being cute ❤️", () => {

            addLine("Evidence found...", () => {

                showPhoto("slide1", () => {

                    addLine("CRIME #2: Being friends with a good man 😎", () => {

                        addLine("Evidence found...", () => {

                            showPhoto("slide2", () => {

                                addLine("VERDICT: Birthday Protocal😎 ", () => {

                                    document
                                        .getElementById("birthday-section")
                                        .classList
                                        .remove("hidden");

                                    document
                                        .getElementById("birthday-section")
                                        .scrollIntoView({
                                            behavior: "smooth"
                                        });

                                });

                            });

                        });

                    });

                });

            });

        });

    }

}


  function startInvestigation() {


    document.getElementById("startScreen").style.display = "none";

    document.querySelector(".terminal").style.display = "block";

    const bgMusic = document.getElementById("bgMusic");

    bgMusic.volume = 0.2;

    bgMusic.play();

    showSequence();
}
function playMusic() {

    document.getElementById("birthdayMusic").play();

    document.getElementById("giftBtn").style.display = "none";

    confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.6 }
    });

    setTimeout(() => {

        const giftPhoto = document.getElementById("giftPhoto");

        giftPhoto.classList.remove("hidden");

        setTimeout(() => {
            giftPhoto.style.opacity = "1";
        }, 100);

        document
            .getElementById("birthdayMessage")
            .classList.remove("hidden");

    }, 1000);
}

   
