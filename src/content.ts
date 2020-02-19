
class Content {
  private price: number = 0;
  private rent: number = 0;
  private tax: number = 0;
  private taxAssessment: number = 0;
  private taxYear: string = "2000";

  constructor() {
    this.setPrice();
    this.setRent();
    this.setTax();
  }
  
  private setPrice() {
    const tag = document.querySelector('span.ds-value') as HTMLSpanElement;
    this.price = this.toFloat(tag.innerText);
  }

  private setRent() {
    const tag = document.querySelector('div#ds-rental-home-values p') as HTMLParagraphElement;
    const text = tag.innerText;
    this.rent = this.toFloat(text.slice(0, text.length - 3));
  }

  private setTax() {
    const rootTag = document.querySelector('tr.ds-tax-table-row');
    const tds = rootTag?.querySelectorAll('td');
    if (tds && tds.length === 3) {
      this.taxYear = tds[0].innerText;
      this.tax = this.toFloat(tds[1].innerText);
      this.taxAssessment = this.toFloat(tds[2].innerText);
    }
  }

  private toFloat(price: string): number {
    return parseFloat(price.slice(1).split(',').join(''));
  }

  private calculateROI(): string {
    const tax = this.price * this.tax / this.taxAssessment;
    const roi = (this.rent * 12 - tax) / this.price;
    return (roi * 100).toFixed(3) + '%';
  }

  toJSON(): any {
    return {
      price: this.price,
      rent: this.rent,
      tax: this.tax,
      taxYear: this.taxYear,
      taxAssessment: this.taxAssessment,
      roi: this.calculateROI(),
      url: location.href
    };
  }
}

chrome.runtime.onMessage.addListener((msg, sender, sendRes) => {
  const content = new Content();
  sendRes(content.toJSON());
});
