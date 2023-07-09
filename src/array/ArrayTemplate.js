import React from 'react'
import './arrayTemplate.css';

function ArrayTemplate({nameArr, salaryArr, idArr}) {
    const classAdd = salaryArr >= 3000 ? 'red' : 'blue';
  return (
    <div>
        <h3 className={classAdd}>{nameArr}</h3>
        <h4>{salaryArr}</h4>
        <h5>{idArr}</h5>
    </div>
  )
}

export default ArrayTemplate