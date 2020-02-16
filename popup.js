let data = {};
document.addEventListener('DOMContentLoaded', function() {

  chrome.tabs.query({currentWindow:true, active:true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, 'hii', setPrice);
  });

  document.querySelector('#btn-save').addEventListener('click', function () {
    const bg = chrome.extension.getBackgroundPage();
    bg.bears.push(data);
    alert('Saved!');
  }, false);

  document.querySelector('#btn-saved').addEventListener('click', function () {
    chrome.tabs.create({url: 'favorites.html'});
  },false);
  
  function setPrice(res) {
    const div = document.createElement('div');
    data = res;
    div.textContent = 'Price: '+res.price + ' ' + 'Rent: ' + res.rent + ' ROI: ' + res.roi;
    document.body.appendChild(div);
  }

}, false);