var x = 0
var array = Array()

function add_element_to_array() {
    array[x] = document.getElementById("txtValue").value
    alert("element " + " ' " + array[x] + " ' " + " added")
    x++
    document.getElementById("txtValue ").value = ""
}