var second = 00
var millisecond = 00
var startSecond = document.getElementById("second")
var startMillisecond = document.getElementById("millisecond")

function startCounter() {
    millisecond++

    if (millisecond < 9) {
        startMillisecond.innerHTML = "0" + millisecond
    }

    if (millisecond > 9) {
        startMillisecond.innerHTML = millisecond
    }

    if (millisecond > 99) {
        second++
        startSecond.innerHTML =  "0" + second
        millisecond = 0
        startMillisecond.innerHTML = "0" + 0
    }

    if (second > 9) {
        startSecond.innerHTML = second
    }
}