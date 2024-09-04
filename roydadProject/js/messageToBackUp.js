let myButton = document.querySelector(".messageToBackUp");

setInterval(
    function () {
        myButton.style.transation = "1s";
        myButton.style.display = "flex";
    },
    5000
);