document.addEventListener('DOMContentLoaded', function () {
  const bg = chrome.extension.getBackgroundPage();
  bg.bears.forEach(function(data){
    const div = document.createElement('div');
    div.innerHTML = `<a href=${data.url}>ROI: ${data.roi}</a>`;
    document.body.appendChild(div);
  });
}, false);