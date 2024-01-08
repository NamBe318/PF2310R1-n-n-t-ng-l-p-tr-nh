var e = "</hr>"
function display_array() {
    for (let i = 0; i < array.length; i++) {
        e += "Element " + i + " = " + array[i] + "</br>"
    }
    document.getElementById("result").innerHTML = e
}

