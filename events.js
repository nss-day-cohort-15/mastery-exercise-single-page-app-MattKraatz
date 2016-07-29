var CarLot = (function(carlot){
  carlot.activateEvents = function(){
    document.addEventListener("click",carHandler);
    document.querySelector("#replacementText").addEventListener("input",CarLot.carOverride);
    function carHandler(e){
      var selectColor = document.getElementById("colorSelect").value
      CarLot.carSelector(e,selectColor)
    }
  }
  return carlot
})(CarLot || {});
