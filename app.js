(function() {
  
  document.getElementById('addBtn').addEventListener('click', function() {
    
    var parentDiv = document.createElement('div');
    var summaryDiv = document.createElement('div');
    var summaryP = document.createElement('p');
    var detailDiv = document.createElement('div');
    var detailP = document.createElement('p');
    var deleteBtn = document.createElement('button');
    var itemList = document.getElementById('itemList');
    
    deleteBtn.innerText = 'Delete';
    deleteBtn.setAttribute('type', 'button');
    deleteBtn.classList.add('btn-block','btn-lg');
    deleteBtn.addEventListener('click', deleteItem);
    
    var summary = document.getElementById('itemSummary');
    var detail = document.getElementById('itemDetail');
    
    summaryP.innerText = summary.value;
    detailP.innerText = detail.value;
    
    parentDiv.classList.add('item');
    summaryDiv.appendChild(summaryP);
    detailDiv.appendChild(detailP);
    parentDiv.appendChild(summaryDiv);
    parentDiv.appendChild(detailDiv);
    parentDiv.appendChild(deleteBtn);
    
    parentDiv.addEventListener('mouseover', function() {
      parentDiv.classList.add('hover');
    });
    
    parentDiv.addEventListener('mouseout', function() {
      parentDiv.classList.remove('hover');
    }); 
    
    var items = itemList.children;

    if(items.length > 0) {
      
      for(var i=0; i<items.length; i++) {
        
        if(summaryDiv.innerText > items[i].firstChild.innerText) {
          continue;
        }
        else {
          itemList.insertBefore(parentDiv, items[i]);
          break;
        }
      }
    }
    else {
      itemList.appendChild(parentDiv);
    }
    
    summary.value = '';
    detail.value = '';
  });
  
  function deleteItem(event) {
    event.target.parentNode.remove();
  }
  
})();