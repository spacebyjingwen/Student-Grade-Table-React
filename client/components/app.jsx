import React from 'react';
import PageTitle from './page-title';
import GradeTable from './grade-table';
import GradeForm from './grade-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [] };
    this.getAverageGrade = this.getAverageGrade.bind(this);
    this.addNewGrade = this.addNewGrade.bind(this);
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

  render() {
    return (
      <>
        <div className="row title-row-adj">
          <PageTitle text="Student Grade Table" average={this.getAverageGrade()} />
        </div>
        <div className="row content-row-adj">
          <GradeTable grades={this.state.grades}/>
          <div className="col-3 form-adj">
            <h4>Add New Grade</h4>
            <GradeForm onSubmit = {this.addNewGrade}/>
          </div>
        </div>
      </>
    );
  }
}

export default App;
