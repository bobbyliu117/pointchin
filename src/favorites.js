
chrome.runtime.sendMessage('get_data', res => {
  console.log(res);
  for (const d of res) {
    console.log(d);
    const div = document.createElement('div');
    div.innerHTML = `<a href=${d.url}>ROI: ${d.roi}</a>`;
    document.body.appendChild(div);
  }
});

// const bg = chrome.extension.getBackgroundPage();
// console.log(bg);
