
chrome.runtime.onMessage.addListener(function(req, sender, res){
  const html = document.documentElement.innerHTML;
  let a0 = html.split('<p class="Text-aiai24-0 sc-eHgmQL sc-hzNEM gjDgC">');
  if (a0.length <= 1) {
    a0 = html.split('<p class="Text-aiai24-0 sc-19crqy3-25 sc-1wz5zm-8 fIsREC">');
  }
  console.log(a0.length);
  const a1 = a0[0].split('<span class="ds-value">')[1];
  const r1 = a1.split('</span>')[0];
  let r2 = a0[1].split('/mo</p>')[0];
  console.log('Rent: '+r2);
  if(r2.length > 15) {
    if (a0.length > 2) {
      r2 = a0[2].split('/mo</p>')[0];
    } else {
      r2 = '$0';
    }
  }
  const tempR3 = (toNum(r2) * 12 / toNum(r1) * 100).toFixed(3);
  res({price:r1, rent:r2, roi:tempR3+'%', url: location.href});
});

function toNum(str) {
  const temp = str.substr(1).split(',');
  let tempStr = '';
  for (let i = 0; i < temp.length; i++) {
    const element = temp[i];
    tempStr += element;
  }
  return parseFloat(tempStr);
}


// const cheerio = require('cheerio');
  // const html = document.documentElement.innerHTML;
  // const $ = cheerio.load(html);
  // const price = $('.ds-value');
  // alert('Price: '+ price.eq(0).text());
  // alert(matches.length);