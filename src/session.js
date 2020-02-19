
window.bears = [];

chrome.runtime.onMessage.addListener(function (req,sender,res) {
  window.bears[req.url] = req.price;
})
