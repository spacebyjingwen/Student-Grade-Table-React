import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', course: '', grade: '' };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCourseChange = this.handleCourseChange.bind(this);
    this.handleGradeChange = this.handleGradeChange.bind(this);
    this.handleSubmmit = this.handleSubmmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
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
    this.setState({ name: '', course: '', grade: '' });
  }

  handleCancel(event) {
    this.setState({ name: '', course: '', grade: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmmit}>
        <div className="input-group group-adj">
          <div className="input-group-prepend">
            <div className="input-group-text prepend-adj"><i className="fas fa-user"></i></div>
          </div>
          <input
            required
            onChange ={this.handleNameChange}
            type="text"
            value={this.state.name}
            className="form-control"
            placeholder="Name"/>
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
            placeholder="Course"/>
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
            placeholder="Grade"/>
        </div>
        <div className="button-group">
          <button type="submit" className="btn btn-outline-success btn-adj">Add</button>
          <button onClick={this.handleCancel} type="reset" className="btn btn-outline-danger btn-adj">Cancel</button>
        </div>
      </form>
    );
  }
}

export default GradeForm;
