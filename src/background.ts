const cusData: any[] = [];

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if(msg === 'get_data') {
    sendResponse(cusData);
  } else {
    cusData.push(msg);
    sendResponse(cusData.length);
  }
});