import React, { useEffect, useState } from 'react'

function Template({titleArr}) {
    return (
        <div>
            <h2>{titleArr}</h2>
        </div>
    )
}

function Api() {
    const link = 'https://jsonplaceholder.typicode.com/posts';
    const [data, setData] = useState([]);
    console.log(data);
    useEffect( ()=> { 
        fetch(link)
            .then(response => response.json())
            .then(json => setData(json))
    }, [])
    const mapArr = data.map( (el, i) => { 
        return <Template titleArr={el.title}/>
    })
  return (
    <div>{mapArr}</div>
  )
}

export default Api;