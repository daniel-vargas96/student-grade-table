class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement;
  }
  updateAverage(newAverage) {
    // console.log(newAverage);
    var gradeElement = this.headerElement.querySelector("span");
    gradeElement.textContent = newAverage;
  }
}
