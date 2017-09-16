import { StuentManagementAppPage } from './app.po';

describe('stuent-management-app App', () => {
  let page: StuentManagementAppPage;

  beforeEach(() => {
    page = new StuentManagementAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
