import { SignalRPage } from './app.po';

describe('signal-r App', () => {
  let page: SignalRPage;

  beforeEach(() => {
    page = new SignalRPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
