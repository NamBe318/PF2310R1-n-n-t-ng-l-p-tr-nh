var check = function(className) {
    var x = document.getElementsByClassName("flip")
    setTimeout(function() {
      for (let i = (x.length - 1); i >= 0; i--) {
        x[i].className = className
      }
    },500)
  }

  var win = function() {
    if(counter === 9) {
        clearInterval(Interval)
        var reset = document.createElement("button")
        reset.setAttribute("onclick","window.location.reload()")
        reset.setAttribute("id", "resetbtn")
        reset.textContent = "Play again"
        MyCard.appendChild(reset)
        document.getElementById("counter").innerHTML = "Your time was " + second + ":" + millisecond
    }
  }
