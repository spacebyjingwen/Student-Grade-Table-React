import React from 'react';

function PageTitle(props) {
  return (
    <>
      <h1>{props.text}</h1>
      <h4>Average Grade <span className="badge badge-secondary badge-adj">{props.average}</span></h4>
    </>
  );
}

export default PageTitle;
