import React from 'react';

function SingleGrade(props) {
  const data = props.data;
  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.course}</td>
      <td>{data.grade}</td>
    </tr>
  );
}

function GradeTable(props) {
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Course</th>
          <th scope="col">Grade</th>
        </tr>
      </thead>
      <tbody>
        {props.grades.map(data => {
          return (
            <SingleGrade key={data.id} data={data}/>
          );
        })}
      </tbody>
    </table>
  );
}

export default GradeTable;
