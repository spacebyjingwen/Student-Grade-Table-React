import React from 'react';
import PageTitle from './page-title';
import GradeTable from './grade-table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [] };
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

  render() {
    return (
      <>
        <div className="title-container">
          <PageTitle text="Student Grade Table"/>
        </div>
        <div className="col-6">
          <GradeTable grades={this.state.grades}/>
        </div>
      </>
    );
  }
}

export default App;
