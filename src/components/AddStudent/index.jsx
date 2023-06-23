import axios from 'axios';
import React, { useState } from 'react'
import { Container } from './style';
import { useNavigate } from 'react-router-dom';

export default function AddStudent() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    name: "",
    last_name: "",
    specialist: "",
    degree: "",
  })

  function submit(e) {
    e.preventDefault();

    axios.post('https://6427fbdc46fd35eb7c492488.mockapi.io/teacher', {
      name: data.name,
      last_name: data.last_name,
      specialist: data.specialist,
      degree: data.degree
    })
      .then(res => {
        navigate('/teachers')
      })
  }

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }
  return (
    <Container>
      <Container.Content>
        <Container.Title>
          Add Teacher
        </Container.Title>
        <form onSubmit={(e) => submit(e)}>
          <Container.Input>
            <input onChange={(e) => handle(e)} id='name' value={data.name} placeholder='Name' type="text" className='form-control mt-3' />
          </Container.Input>
          <Container.Input>
            <input onChange={(e) => handle(e)} id='last_name' value={data.last_name} placeholder='Last Name' type="text" className='form-control mt-3' />
          </Container.Input>
          <Container.Input>
            <input onChange={(e) => handle(e)} id='specialist' value={data.specialist} placeholder='Specialist' type="text" className='form-control mt-3' />
          </Container.Input>
          <Container.Input>
            <input onChange={(e) => handle(e)} id='degree' value={data.degree} placeholder='Degree ' type="text" className='form-control mt-3' />
          </Container.Input>
          <Container.Button>
            <button className='btn btn-success mt-3 button'>Add Teacher</button>
          </Container.Button>
        </form>
      </Container.Content>
    </Container>
  )
}


