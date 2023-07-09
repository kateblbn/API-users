import React from 'react'
import './arrayTemplate.css';
// import ArrayTemplate from './ArrayTemplate';

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

function Array() {
    const users = [
        { name: "Ann Q.", salary: 800, increase: true, id: 1 },
        { name: "Alex M.", salary: 3000, increase: false, id: 2 },
        { name: "Carl R.", salary: 5500, increase: true, id: 3 },
      ];
      const arr = users.map( (el, i) => {
        return <ArrayTemplate nameArr={el.name} salaryArr={el.salary} idArr={el.id}/>
      })
      
  return (
    <div>
        {arr}
    </div>
  )
}



export default Array;