import React from 'react';
import PageTitle from './page-title';
import GradeTable from './grade-table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [] };
    this.getAverageGrade = this.getAverageGrade.bind(this);
  }

  componentDidMount() {
    this.getGrades();
  }

  getGrades() {
    fetch('/api/grades')
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response failed.');
        }
        return res.json();
      })
      .then(data => {
        this.setState({ grades: data });
      })
      .catch(error => console.error(error));
  }

  getAverageGrade() {
    const arr = [...this.state.grades];
    if (arr.length === 0) {
      return 0;
    } else {
      const sum = arr.reduce((acc, cur) => acc + cur.grade, 0);
      return Math.floor(sum / arr.length);
    }
  }

  render() {
    return (
      <>
        <div className="table-container col-6">
          <div className="title-container row row-adj">
            <PageTitle text="Student Grade Table" average={this.getAverageGrade()}/>
          </div>
          <GradeTable grades={this.state.grades}/>
        </div>
        <div className="form-container"></div>
      </>
    );
  }
}

export default App;
