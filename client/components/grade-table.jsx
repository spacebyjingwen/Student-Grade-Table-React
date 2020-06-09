import React from 'react';

function SingleGrade(props) {
  const data = props.data;
  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.course}</td>
      <td>{data.grade}</td>
      <td>
        <button onClick={() => props.deleteGrade(data.id)} type="button"
          className="btn btn-outline-danger table-btn-1"><i className="fas fa-trash-alt"></i></button>
        <button onClick={() => props.setEditing(data.id)}type="button"
          className="btn btn-outline-primary table-btn-2"><i className="fas fa-edit"></i></button>
      </td>
    </tr>
  );
}

function GradeTable(props) {
  return props.grades.length !== 0
    ? (
      <table className="table col-8 table-adj">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Course</th>
            <th scope="col">Grade</th>
            <th scope="col">Operation</th>
          </tr>
        </thead>
        <tbody>
          {props.grades.map(data => {
            return (
              <SingleGrade key={data.id} data={data} deleteGrade={props.deleteGrade} setEditing={props.setEditing}/>
            );
          })}
        </tbody>
      </table>
    )
    : (
      <table className="table col-8 table-adj">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Course</th>
            <th scope="col">Grade</th>
            <th scope="col">Operation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="4" className="table-note">No Grades Recorded</td>
          </tr>
        </tbody>
      </table>
    );
}

export default GradeTable;
