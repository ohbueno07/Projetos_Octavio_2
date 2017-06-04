import { Loja5Page } from './app.po';

describe('loja5 App', () => {
  let page: Loja5Page;

  beforeEach(() => {
    page = new Loja5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
