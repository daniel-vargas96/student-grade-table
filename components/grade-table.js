class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
    this.updateGrades.bind(this);
  }
  updateGrades(grades) {
    console.log(grades);
  }
}
