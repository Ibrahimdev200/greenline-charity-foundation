function increaseAmount() {
    var amountInput = document.getElementById('amount');
    var currentValue = parseInt(amountInput.value);
    if (!isNaN(currentValue)) {
      amountInput.value = currentValue + 500;
    }
  }
  
  function decreaseAmount() {
    var amountInput = document.getElementById('amount');
    var currentValue = parseInt(amountInput.value);
    if (!isNaN(currentValue) && currentValue > 500) {
      amountInput.value = currentValue - 500;
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');
  
    menuIcon.addEventListener('click', function() {
      menuIcon.classList.toggle('active');
      menu.classList.toggle('active');
    });
  });

  
  