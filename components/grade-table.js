class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
    this.updateGrades.bind(this);
  }
  updateGrades(grades) {
    var tbody = document.querySelector("tbody");
    for(var i = 0; i < grades.length; i++) {
      var row = document.createElement("tr");
      var studentName = document.createElement("td");
      var course = document.createElement("td");
      var studentGrade = document.createElement("td");
      studentName.textContent = grades[i].name;
      course.textContent = grades[i].course;
      studentGrade.textContent = grades[i].grade;
      row.append(studentName, course, studentGrade);
      tbody.appendChild(row);
    }
  }
}
