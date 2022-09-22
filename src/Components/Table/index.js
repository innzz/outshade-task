import React from 'react';
import './index.css';

const Table = ({tableContent}) => {
  return (
    <div className="table">
    <div className="table-headings">
        <span>Description</span>
        <span>Details</span>
    </div>
    <div className="table-contents">
        {tableContent.map((val,i)=>(
        <div key={i} className="table-content-row">
            <span>{val.key}</span>
            <span>{val.value}</span>
        </div>
        ))}
    </div>
</div>
  )
}

export default Table