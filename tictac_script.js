let isX = true;
let round = 1;
document.getElementById("oOrder").style.opacity = "80%";

function disableButtons() {
    let buttons = document.getElementsByClassName("square");
    for (let i = 0; i < buttons.length; ++i) {
        buttons[i].disabled = true;
    }
}

function checkWin() {
    let bValue = [];
    let value;
    for (let i = 0; i < 9; ++i) {
        value = document.getElementsByClassName("square")[i].style.backgroundImage.charAt(17);
        bValue.push(value);
    }
    if (bValue[0] == bValue[1] && bValue[1] == bValue[2] && bValue[0] != '' || bValue[3] == bValue[4] && bValue[4] == bValue[5] && bValue[3] != '' ||
        bValue[6] == bValue[7] && bValue[7] == bValue[8] && bValue[6] != '' || bValue[0] == bValue[3] && bValue[3] == bValue[6] && bValue[0] != '' ||
        bValue[1] == bValue[4] && bValue[4] == bValue[7] && bValue[1] != '' || bValue[2] == bValue[5] && bValue[5] == bValue[8] && bValue[2] != '' ||
        bValue[0] == bValue[4] && bValue[4] == bValue[8] && bValue[0] != '' || bValue[2] == bValue[4] && bValue[4] == bValue[6] && bValue[2] != '') {
            disableButtons();
            document.getElementById("oOrder").style.opacity = "20%";
            document.getElementById("xOrder").style.opacity = "20%";
            if (round % 2 != 0) {
                document.getElementById("title").innerHTML = "O wins!";
            } else {
                document.getElementById("title").innerHTML = "X wins!";
            }
    }
}

for (let i = 0; i < 9; ++i) {
    let btn = document.createElement("button");
    btn.classList.add("square");
    btn.onclick = function() {
        if (isX) {
            this.style.backgroundImage = "url(./resources/x.png)";
            document.getElementById("oOrder").style.opacity = "80%";
            document.getElementById("xOrder").style.opacity = "20%";
        } else {
            this.style.backgroundImage = "url(./resources/o.png)";
            document.getElementById("oOrder").style.opacity = "20%";
            document.getElementById("xOrder").style.opacity = "80%";
        }
        ++round;
        isX = !isX;
        this.disabled = true;
        if (round > 5) {
            checkWin();
        }
    };
    document.getElementById("table").appendChild(btn);
}

function reset() {
    let buttons = document.getElementsByClassName("square");
    for (let i = 0; i < buttons.length; ++i) {
        buttons[i].disabled = false;
        buttons[i].style.backgroundImage = null;
    }
    isX = true;
    round = 1;
    document.getElementById("xOrder").style.opacity = "80%";
    document.getElementById("oOrder").style.opacity = "20%";
    document.getElementById("title").innerHTML = "Tic Tac Toe";
}