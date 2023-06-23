import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Container } from './style';
import { useNavigate } from 'react-router-dom';

export default function Edit() {
    const params = useParams();
    const [teacher, setTeacher] = useState({});
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://6427fbdc46fd35eb7c492488.mockapi.io/teacher/${params.id}`, {
            headers: {
                'Content-Type': "application/json"
            }
        }).then(res => setTeacher({ ...res.data }))
            .catch(err => console.log(err))
    }, [])

    const getData = (e) => {
        setTeacher({ ...teacher, [e.target.name]: e.target.value })
    }

    const saveTeacher = () => {
        axios.put(`https://6427fbdc46fd35eb7c492488.mockapi.io/teacher/${params.id}`, teacher, {
            headers: {
                'Content-Type': "application/json"
            }
        }).then(res => navigate('/teachers'))
            .catch(err => console.log(err))
    }
    return (
        <Container>
            <Container.Content>
                <Container.Title>
                    Edit
                </Container.Title>
                <Container.Input>
                    <input onChange={(e) => getData(e)} name='name' value={teacher.name} class="form-control" type="text" placeholder="Name" />
                </Container.Input>
                <Container.Input>
                    <input onChange={(e) => getData(e)} name='last_name' value={teacher.last_name} class="form-control" type="text" placeholder="Last Name" />
                </Container.Input>
                <Container.Input>
                    <input onChange={(e) => getData(e)} name='specialist' value={teacher.specialist} class="form-control" type="text" placeholder="Specialist" />
                </Container.Input>
                <Container.Input>
                    <input onChange={(e) => getData(e)} name='degree' value={teacher.degree} class="form-control" type="text" placeholder="Degree" />
                </Container.Input>
                <Container.Button>
                    <button onClick={() => saveTeacher()} className='btn btn-success mt-3 button'>Edit Teacher</button>
                </Container.Button>
            </Container.Content>
        </Container>
    )
}
