document.addEventListener('DOMContentLoaded', function () {
    var list = document.querySelector('ul');
    var input = document.querySelector('input[type="text"]');
    var addButton = document.querySelector('button');
  
    function addItemToList() {
      var itemValue = input.value;
      input.value = '';
  
      var listItem = document.createElement('li');
      var span = document.createElement('span');
      var deleteButton = document.createElement('button');
  
      span.textContent = itemValue;
      deleteButton.textContent = 'Delete';
  
      deleteButton.onclick = function(e) {
        list.removeChild(listItem);
      };
  
      listItem.appendChild(span);
      listItem.appendChild(deleteButton);
      list.appendChild(listItem);
  
      input.focus();
    }
  
    addButton.addEventListener('click', addItemToList);
  });