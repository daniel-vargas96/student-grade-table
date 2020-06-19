class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement;
  }
  updateAverage(newAverage) {
    const gradeElement = this.headerElement.querySelector("span");
    gradeElement.textContent = newAverage;
  }
}
