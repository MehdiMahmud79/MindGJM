import React from 'react';

function Container(props) {
  return (
    <div className="card text-center">
      <div className="card-header">
        <h2>{props.heading}</h2>
      </div>
      <div className="card-body">{props.children}</div>
    </div>
  );
}

export default Container;