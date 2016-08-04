var CarLot = (function(carlot) {
  // Function to get JSON data and then call a function to build the HTML page
  carlot.loadInventory = (function() {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function() {
        let data = JSON.parse(xhr.responseText).cars;
        carlot.populatePage(data)
        carlot.activateEvents()
    })
    xhr.open("GET", "inventory.json")
    xhr.send()
  })()
  // Adding a property to the global variable that will return inventory data
  carlot.getInventory = function() {
    return data;
  }
  carlot.carSelector = function(e) {
    if (e.target.localName === "div" && e.target.classList[4] === "card") {
      e.target.classList.toggle('selected');
      document.querySelector(".form-control").value = "";
      document.querySelector(".form-control").focus();
    } else if (e.target.parentNode.classList[4] === "card") {
      e.target.parentNode.classList.toggle('selected');
      document.querySelector(".form-control").value = "";
      document.querySelector(".form-control").focus();
    }
  }
  carlot.carOverride = function() {
    var selectedCar = document.querySelector(".selected");
    selectedCar.children[4].textContent = document.querySelector("#replacementText").value
  }
  return carlot
})(CarLot || {})
