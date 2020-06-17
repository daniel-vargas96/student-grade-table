class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
    this.updateGrades.bind(this);
  }
  updateGrades(grades) {
    var tbody = document.querySelector("tbody");
    tbody.textContent = "";
    for (var i = 0; i < grades.length; i++) {
      tbody.append(this.renderGradeRow(grades[i], this.deleteGrade));
    }
    var noGrades = document.querySelector("p");
    if(grades.length === 0) {
      noGrades.classList.remove("hidden");
    } else {
      noGrades.classList.add("hidden");
    }
  }
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(data, deleteGrade) {
        var row2 = document.createElement("tr");
        var studentName1 = document.createElement("td");
        var course1 = document.createElement("td");
        var studentGrade1 = document.createElement("td");
        var deleteButtonParent = document.createElement("td");
        var deleteButton = document.createElement("button");

        studentName1.textContent = data.name;
        course1.textContent = data.course;
        studentGrade1.textContent = data.grade;
        deleteButton.textContent = "DELETE";
        deleteButton.className = "btn btn-danger";

        row2.append(studentName1, course1, studentGrade1, deleteButtonParent);
        deleteButtonParent.append(deleteButton);

        deleteButton.addEventListener("click", function() {
          deleteGrade(data.id);
        });
    return row2;
  }
}
