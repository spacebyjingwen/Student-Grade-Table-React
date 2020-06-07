import React from 'react';

function PageTitle(props) {
  return (
    <>
      <h1>{props.text}</h1>
      <h5>Average Grade <span className="badge badge-secondary badge-adj">{props.average}</span></h5>
    </>
  );
}

export default PageTitle;
