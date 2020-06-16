class App {

  handleGetGradesError(error) {
    console.error(error);
  }

  handleGetGradesSuccess(grades) {
    console.log(grades);
  }

  constructor() {
    this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess.bind(this);
  }

  getGrades() {
    $.ajax() {
      method: "GET",
      url: "https://sgt.lfzprototypes.com"
      error: handleGetGradesError();
      success: handleGetGradesSuccess();
    }
  }
  start() {
    this.getGrades();
  }
}
