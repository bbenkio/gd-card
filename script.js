document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('elfbutton');

    var hasMoved = false;
  
    button.addEventListener('mouseenter', function() {
      // Only move the button if it hasn't been moved yet
      if (!hasMoved) {
        moveButton();
        hasMoved = true;
      }
    });
  
    button.addEventListener('transitionend', function() {
      hasMoved = false;
    });
  
    function moveButton() {
      var maxX = window.innerWidth - button.clientWidth;
      var maxY = window.innerHeight - button.clientHeight;
  
      var newX = Math.floor(Math.random() * maxX);
      var newY = Math.floor(Math.random() * maxY);
  
      button.style.left = newX + 'px';
      button.style.top = newY + 'px';
    }
  });