var arr = []
for (i = 0; i < 100; ++i) {
    arr[i] = Math.floor(Math.random() * 101)
} document.getElementById("array").innerHTML = arr
function findMin(arr) {
    var min = arr[0]
    for (i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    document.getElementById("minimum").innerHTML = "giá trị nhỏ nhất là: " + min
}