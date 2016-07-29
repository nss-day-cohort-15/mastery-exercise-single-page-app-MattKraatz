var CarLot = (function(carlot){
    carlot.selectorReset = function() {
      if (document.querySelector(".selected")) {
      var carColor = document.querySelector(".selected").children[1].innerText
      document.querySelector(".selected").attributes[1].value = "border-color: " + carColor
      document.querySelector(".selected").classList.toggle('selected')
    }
    }
    carlot.carSelector = function (e,selectColor) {
      if (e.target.classList[4] === "card") {
        carlot.selectorReset();
        e.target.classList.toggle('selected');
        var carColor = e.target.children[1].innerText
        e.target.attributes[1].value = "border-color: " + carColor + "; background-color: " + selectColor
        document.querySelector("#replacementText").value = "";
        document.querySelector("#replacementText").focus();
      } else if (e.target.parentNode.classList[4] === "card") {
        carlot.selectorReset();
        e.target.parentNode.classList.toggle('selected');
        var carColor = e.target.parentNode.children[1].innerText
        e.target.parentNode.attributes[1].value = "border-color: " + carColor + "; background-color: " + selectColor
        document.querySelector("#replacementText").value = "";
        document.querySelector("#replacementText").focus();
      }
    }
  return carlot
})(CarLot || {});
