function tim_gia_tri_lon_nhat() {
    let number = [-3, 5, 1, 3, 2, 10]
    let max = number[0]
    let index = 0
    for (i = 1; i < number.length; i++) {
        if (number[i] > max) {
            max = number[i]
            index = i
        }
        document.getElementById("result").innerHTML = "Max: " + max + " được tìm thấy ở vị trí " + i
    }
}