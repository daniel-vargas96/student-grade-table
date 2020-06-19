class GradeForm {
  constructor(formElement) {
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formElement = formElement;
    this.formElement.addEventListener('submit', this.handleSubmit);
  }
  onSubmit(createGrade) {
    this.createGrade = createGrade;
  }
  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target)
    const newName = formData.get("name");
    const newCourse = formData.get("course");
    const newGrade = formData.get("grade");
    this.createGrade(newName, newCourse, newGrade);
    event.target.reset();
  }
}
