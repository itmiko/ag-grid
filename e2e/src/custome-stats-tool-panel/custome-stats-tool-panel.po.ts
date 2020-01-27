import { browser, by, element } from 'protractor';

export class CustomStatsToolPanelPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTotalText() {
    return element(by.css('.total')).getText();
  }
  getSelectedText() {
    return element(by.css('.selected')).getText();
  }

  getShowHideBtn() {
    return element(by.css('.show-hide-btn'));
  }

  getSelectAllCell() {
    return element(by.css('#select-all'));
  }
}
