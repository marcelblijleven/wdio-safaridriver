export default class Page {
  constructor(url) {
    this.url = url
  }

  /**
   * Gets the title of the page
   * @returns {string} Title
   */
  get title() { return browser.getTitle() }

  /**
   * Navigates to the page
   * @returns {ThisType}
   */
  navigateTo() {
    browser.url(this.url)
    return this
  }
}
