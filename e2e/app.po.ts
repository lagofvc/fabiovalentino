export class FabiovalentinoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('fabiovalentino h1')).getText();
  }
}
