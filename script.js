
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
    const menuItems = document.querySelectorAll('.menu a');

  
    menuIcon.addEventListener('click', function() {
      menuIcon.classList.toggle('active');
      menu.classList.toggle('active');


      menuItems.forEach(item => {
        item.addEventListener('click', function() {
          // Hide the menu
          const menu = document.querySelector('.menu');
          menu.classList.remove('active');
    
          // Hide the menu icon if it's open
          const menuIcon = document.querySelector('.menu-icon');
          menuIcon.classList.remove('active');
        });
      });
    });
    });
  






