import './css/popup.css';

let tempData = {};

chrome.tabs?.query({currentWindow: true, active: true}, t => {
  const id = t[0].id ?? 0;
  chrome.tabs.sendMessage(id, 'msg_crawl_data', res => {
    tempData = res;
    render(res);
  });
});

function render(res: any) {
  const {price, rent, tax, taxYear, taxAssessment, roi } = res;
  addLi('Price', price);
  addLi('Rent', rent);
  addLi('Tax', tax);
  addLi('Year', taxYear);
  addLi('Assessment', taxAssessment);
  addLi('ROI', roi);
}

function addLi(key: string, value: string) {
  const li = document.createElement('li');
  li.classList.add('list1');
  li.innerHTML = `<b>${key}:</b> <p>${value}</p>`;
  document.querySelector('ul')?.appendChild(li);
}

const btnSave = document.querySelector('#btn-save') as HTMLButtonElement;
btnSave.addEventListener('click', function() {
  chrome.runtime.sendMessage(tempData, res => alert('Response: ' + res));
});

const btnSaved = document.querySelector('#btn-saved') as HTMLButtonElement;
btnSaved.addEventListener('click', function() {
  chrome.tabs?.create({url: '../static/favorites.html'});
});


// render({price: 1, rent: 2, tax: 3, taxYear: 2019, taxAssessment: 4, roi: '5%'});