var headerEl = document.querySelector("header");
var tableEl = document.querySelector('table');
var formEl = document.querySelector("form");

var pageHeader = new PageHeader(headerEl);
var gradeTable = new GradeTable(tableEl);
var gradeForm = new GradeForm(formEl);
var app = new App(gradeTable, pageHeader, gradeForm);
app.start();
