import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', course: '', grade: '', id: undefined };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCourseChange = this.handleCourseChange.bind(this);
    this.handleGradeChange = this.handleGradeChange.bind(this);
    this.handleSubmmit = this.handleSubmmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleCancelEdit = this.handleCancelEdit.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleCourseChange(event) {
    this.setState({
      course: event.target.value
    });
  }

  handleGradeChange(event) {
    this.setState({
      grade: event.target.value
    });
  }

  handleSubmmit(event) {
    event.preventDefault();
    const newGrade = {
      name: this.state.name,
      course: this.state.course,
      grade: this.state.grade
    };
    this.props.onSubmit(newGrade);
    this.setState({ name: '', course: '', grade: '', id: undefined });
  }

  handleCancel(event) {
    this.setState({ name: '', course: '', grade: '', id: undefined });
  }

  componentDidUpdate(prevGrade) {
    if (this.props.edit && this.props.edit !== prevGrade.edit) {
      const editGrade = {
        name: this.props.edit.name,
        course: this.props.edit.course,
        grade: this.props.edit.grade,
        id: this.props.edit.id
      };
      this.setState(editGrade);
    }
  }

  handleEdit(event) {
    event.preventDefault();
    const newGrade = {
      name: this.state.name,
      course: this.state.course,
      grade: this.state.grade,
      id: this.state.id
    };
    this.props.onSubmit(newGrade);
    this.setState({ name: '', course: '', grade: '', id: undefined });
  }

  handleCancelEdit(event) {
    this.props.status(null);
    this.setState({ name: '', course: '', grade: '', id: undefined });
  }

  render() {
    return this.props.edit === null ? (
      <>
        <h4>Add New Grade</h4>
        <form onSubmit={this.handleSubmmit}>
          <div className="input-group group-adj">
            <div className="input-group-prepend">
              <div className="input-group-text prepend-adj"><i className="fas fa-user"></i></div>
            </div>
            <input
              required
              onChange={this.handleNameChange}
              type="text"
              value={this.state.name}
              className="form-control"
              placeholder="Name" />
          </div>
          <div className="input-group group-adj">
            <div className="input-group-prepend">
              <div className="input-group-text prepend-adj"><i className="fas fa-list-alt"></i></div>
            </div>
            <input
              required
              onChange={this.handleCourseChange}
              type="text"
              value={this.state.course}
              className="form-control"
              placeholder="Course" />
          </div>
          <div className="input-group group-adj">
            <div className="input-group-prepend">
              <div className="input-group-text prepend-adj"><i className="fas fa-graduation-cap"></i></div>
            </div>
            <input
              required
              onChange={this.handleGradeChange}
              type="text"
              value={this.state.grade}
              className="form-control"
              placeholder="Grade" />
          </div>
          <div className="button-group">
            <button type="submit" className="btn btn-outline-success btn-adj">Add</button>
            <button onClick={this.handleCancel} type="reset" className="btn btn-outline-warning btn-adj">Cancel</button>
          </div>
        </form>
      </>
    )
      : (
        <>
          <h4>Edit Student Grade</h4>
          <form onSubmit={this.handleEdit}>
            <div className="input-group group-adj">
              <div className="input-group-prepend">
                <div className="input-group-text prepend-adj"><i className="fas fa-user"></i></div>
              </div>
              <input
                required
                onChange={this.handleNameChange}
                type="text"
                value={this.state.name}
                className="form-control"
                placeholder="Name" />
            </div>
            <div className="input-group group-adj">
              <div className="input-group-prepend">
                <div className="input-group-text prepend-adj"><i className="fas fa-list-alt"></i></div>
              </div>
              <input
                required
                onChange={this.handleCourseChange}
                type="text"
                value={this.state.course}
                className="form-control"
                placeholder="Course" />
            </div>
            <div className="input-group group-adj">
              <div className="input-group-prepend">
                <div className="input-group-text prepend-adj"><i className="fas fa-graduation-cap"></i></div>
              </div>
              <input
                required
                onChange={this.handleGradeChange}
                type="text"
                value={this.state.grade}
                className="form-control"
                placeholder="Grade" />
            </div>
            <div className="button-group">
              <button type="submit" className="btn btn-outline-success btn-adj">Edit</button>
              <button onClick={this.handleCancelEdit} type="reset" className="btn btn-outline-warning btn-adj">Cancel</button>
            </div>
          </form>
        </>
      );
  }
}

export default GradeForm;
