import React from 'react';
import PageTitle from './page-title';
import GradeTable from './grade-table';
import GradeForm from './grade-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [], editing: null };
    this.getAverageGrade = this.getAverageGrade.bind(this);
    this.addNewGrade = this.addNewGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
    this.setEditing = this.setEditing.bind(this);
    this.editGrade = this.editGrade.bind(this);
  }

  componentDidMount() {
    this.getGrades();
  }

  getGrades() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(data => {
        this.setState({ grades: data });
      })
      .catch(error => console.error(error));
  }

  getAverageGrade() {
    const arr = this.state.grades;
    if (arr.length === 0) {
      return 0;
    } else {
      const sum = arr.reduce((acc, cur) => acc + Number(cur.grade), 0);
      const avg = Math.floor(sum / arr.length);
      return avg;
    }
  }

  addNewGrade(newGrade) {
    fetch('/api/grades', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newGrade)
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ grades: [...this.state.grades, data] });
      })
      .catch(error => console.error(error));
  }

  deleteGrade(gradeId) {
    fetch(`/api/grades/${gradeId}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(() => {
        const arr = this.state.grades;
        const newArr = arr.filter(item => item.id !== gradeId);
        this.setState({ grades: newArr });
      })
      .catch(error => console.error(error));
  }

  setEditing(gradeId) {
    if (gradeId === null) {
      this.setState({ editing: null });
    } else {
      const gradeArr = this.state.grades;
      const found = gradeArr.find(grade => grade.id === gradeId);
      this.setState({ editing: found });
    }
    return this.state.editing;
  }

  editGrade(newGrade) {
    fetch(`/api/grades/${newGrade.id}`, {
      method: 'PATCH',
      header: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newGrade)
    })
      .then(res => res.json())
      .then(update => {
        const newArray = this.state.grades.map(oldGrade => {
          return oldGrade.id === newGrade.id ? newGrade : oldGrade;
        });
        this.setState({ grades: newArray, editing: null });
      })
      .catch(error => console.error(error));
  }

  render() {
    return this.state.editing === null ? (
      <>
        <div className="row title-row-adj">
          <PageTitle text="Student Grade Table" average={this.getAverageGrade()} />
        </div>
        <div className="row content-row-adj">
          <GradeTable grades={this.state.grades} deleteGrade={this.deleteGrade} setEditing={this.setEditing} />
          <div className="col-3 form-adj">
            <GradeForm onSubmit={this.addNewGrade} edit={this.state.editing} />
          </div>
        </div>
      </>
    ) : (
      <>
        <div className="row title-row-adj">
          <PageTitle text="Student Grade Table" average={this.getAverageGrade()} />
        </div>
        <div className="row content-row-adj">
          <GradeTable grades={this.state.grades} deleteGrade={this.deleteGrade} setEditing={this.setEditing} />
          <div className="col-3 form-adj">
            <GradeForm onSubmit={this.editGrade} edit={this.state.editing} status={this.setEditing}/>
          </div>
        </div>
      </>
    );
  }
}

export default App;
