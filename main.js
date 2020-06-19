var headerEl = document.querySelector("header");
const tableEl = document.querySelector('table');
const formEl = document.querySelector("form");
const noGradesEl = document.querySelector(".hidden");

const pageHeader = new PageHeader(headerEl);
const gradeTable = new GradeTable(tableEl, noGradesEl);
const gradeForm = new GradeForm(formEl);
const app = new App(gradeTable, pageHeader, gradeForm);
app.start();
