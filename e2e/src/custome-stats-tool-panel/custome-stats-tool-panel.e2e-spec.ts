import {browser, by, element, logging} from 'protractor';
import {CustomStatsToolPanelPage} from './custome-stats-tool-panel.po';

describe('workspace-project App', () => {
  let page: CustomStatsToolPanelPage;

  beforeEach(() => {
    page = new CustomStatsToolPanelPage();
    page.navigateTo();
  });

  it('should hide selection column', () => {
    page.getShowHideBtn().click();
    browser.sleep(1000);
    expect(page.getSelectAllCell().isPresent()).toBe(false);
  });

  it('should count selected rows', () => {
    page.getSelectAllCell().click();
    expect(page.getSelectedText()).toContain(page.getTotalText());
  });

});
