var CarLot = (function(carlot) {
  // Defining private varible to store parsed JSON data
  var data = {}
  // Function to get JSON data and then call a function to build the HTML page
  carlot.loadInventory = (function() {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function() {
        data = JSON.parse(xhr.responseText).cars;
        carlot.buildHTML(data)
        carlot.activateEvents()
    })
    xhr.open("GET", "inventory.json")
    xhr.send()
  })()
  // Adding a property to the global variable that will return inventory data
  carlot.getInventory = function() {
    return data;
  }
  // Function to build the HTML page with JSON data returned via loadInventory
  carlot.buildHTML = function(data) {
    for (i in data) {
      if (i % 3 == 0) {
        var k = parseInt(i)
        var j = parseInt(i) + 1
        var h = parseInt(i) + 2
        carContainer.innerHTML +=`
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 card" style="border-color: ${data[k].color};">
              <h2>${data[k].year} ${data[k].make} ${data[k].model}</h2>
              <h3>${data[k].color}</h3>
              <h4>$${data[k].price}.00</h4>
              <p>Already Sold? ${data[k].purchased}</p>
              <p>${data[k].description}</p>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 card" style="border-color: ${data[j].color};">
              <h2>${data[j].year} ${data[j].make} ${data[j].model}</h2>
              <h3>${data[j].color}</h3>
              <h4>$${data[j].price}.00</h4>
              <p>Already Sold? ${data[j].purchased}</p>
              <p>${data[j].description}</p>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 card" style="border-color: ${data[h].color};">
              <h2>${data[h].year} ${data[h].make} ${data[h].model}</h2>
              <h3>${data[h].color}</h3>
              <h4>$${data[h].price}.00</h4>
              <p>Already Sold? ${data[h].purchased}</p>
              <p>${data[h].description}</p>
            </div>
          </div>
        `
      }
    }
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
