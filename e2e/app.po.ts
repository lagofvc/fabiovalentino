export class FabiovalentinoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('fabiovalentino-app h1')).getText();
  }
}
