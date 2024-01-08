var MyCard = document.getElementById("container")
var result = []
var counter = 0
var Interval 
var images = ["Klee", "Keqing", "Barbara", "Nahida", "Kokomi", "Albedo", "Bennett", "Diona", "Collei"]
var duplicate = images.slice(0)
var cards = images.concat(duplicate)

function shuffle(arr){
    for(var k, j, i = arr.length; i; j = Math.floor(Math.random() * i), k = arr[--i],   arr[i] = arr[j], arr[j] = k);
    return arr;
  }
shuffle(cards)

for (var i = 0; i < cards.length; i++) {
  document.getElementById("win").innerHTML = "_______________________________"
  card = document.createElement("div")
  card.dataset.item = cards[i]
  card.dataset.view = "card"
  MyCard.appendChild(card)


  card.onclick = function () {
    if (this.className != "flip" && this.className != "correct") {
      this.className = "flip"
      var final = this.dataset.item
      result.push(final)
      clearInterval(Interval)
      Interval = setInterval(startCounter, 10)
    }

    if (result.length > 1) {
        if (result[0] === result[1]) {
            counter
            check("correct")
            counter++
            win()
            result = []
        } else {
            check("reverse")
            result = []
        }
    }
  }
}

// create timer
for (var i = 0; i < 1; i++) {
  time = document.createElement("p")
  time.setAttribute("id", "counter") 
  MyCard.appendChild(time)
  for (var i = 0; i < 1; i++) {
      sec = document.createElement("span")
      sec.setAttribute("id", "second")
      time.appendChild(sec)
      sec.textContent = "00"
      dot = document.createElement("span")
      time.appendChild(dot)
      dot.textContent = ":"
      milli = document.createElement("span")
      milli.setAttribute("id", "millisecond")
      time.appendChild(milli)
      milli.textContent = "00"
  }
}