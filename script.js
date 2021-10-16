let cps = 0;

document.getElementById("clickHere").addEventListener("click", function () { cps++; });

setInterval(function () {
    document.getElementById("cpsCounter").textContent = "CPS: " + cps;
    cps = 0;
}, 1000);