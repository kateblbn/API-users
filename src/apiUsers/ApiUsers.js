import React, { useEffect, useState } from 'react'


function UserTemplate({nameUser, usersEmail, usersPhone, usersWebsite}) {
  return(
    <div>
      <h3> Name: {nameUser}</h3>
      <h4> Email: {usersEmail}</h4>
      <h5> Phone: {usersPhone}</h5>
      <h6>Website: {usersWebsite}</h6>
    </div>
  )
}

function ApiUsers() {
const linkUsers = 'https://jsonplaceholder.typicode.com/users';
const [users, setUsers] = useState([]);
console.log(users);
useEffect( () => {
  fetch(linkUsers)
      .then(response => response.json())
      .then(json => setUsers(json))
}, []);
const usersInfo = users.map( (el, i) => {
  return <UserTemplate nameUser={el.name} usersEmail={el.email} usersPhone={el.phone} usersWebsite={el.website}/>
})
  return (
    <div>
      <h3> <span>{usersInfo}</span></h3>
    </div>
  )
}

export default ApiUsers