import { FabiovalentinoPage } from './app.po';

describe('fabiovalentino App', function() {
  let page: FabiovalentinoPage;

  beforeEach(() => {
    page = new FabiovalentinoPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('fabiovalentino works!');
  });
});
