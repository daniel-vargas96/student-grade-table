var headerEl = document.querySelector("header");
var tableEl = document.querySelector('table');
var pageHeader = new PageHeader(headerEl);
var gradeTable = new GradeTable(tableEl);
var app = new App(gradeTable, pageHeader);
app.start();
