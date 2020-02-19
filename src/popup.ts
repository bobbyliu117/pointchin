interface CusWindow extends Window {
  data: [any];
}

let tempData = {};

chrome.tabs.query({currentWindow: true, active: true}, t => {
  const id = t[0].id ?? 0;
  chrome.tabs.sendMessage(id, 'msg_crawl_data', res => {
    tempData = res;
    const {price, rent, tax, taxYear, taxAssessment, roi, url} = res;
    const div = document.createElement('div');
    div.innerText = price + ' : ' + rent+ ' : ' + tax+ ' : ' + taxYear+ ' : ' + taxAssessment + ' : ' + roi;
    document.body.appendChild(div);
  });
});

const btnSave = document.querySelector('#btn-save') as HTMLButtonElement;
btnSave.addEventListener('click', function() {
  chrome.runtime.sendMessage(tempData, res => alert('Response: ' + res));
});

const btnSaved = document.querySelector('#btn-saved') as HTMLButtonElement;
btnSaved.addEventListener('click', function() {
  chrome.tabs.create({url: '../static/favorites.html'});
});

