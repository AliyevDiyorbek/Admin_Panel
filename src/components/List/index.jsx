import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Loader from '../Loader';
import { onSuccess } from '../Notification';

export default function List() {
    useState(() => {
        onSuccess()
    }, [])
    const [student, setStudent] = useState([]);
    const [load, setLoad] = useState(false)

    useEffect(() => {
        setLoad(true)
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(res => {
                setStudent(res.data)

                setTimeout(() => {
                    setLoad(false)
                }, 500)
            })
    }, [])

    return (
        <>
            {
                load ? <Loader />
                    :
                    <table className="table mt-5">
                        <thead>
                            <tr>
                                <th scope="col">postId</th>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Charges</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                student.map(data => <tr className='bg my-2' key={data.id}>
                                    <th scope="row">{data.postId}</th>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>${Math.floor(Math.random() * 10)}, 000</td>
                                    <td className='last'><i class="bi bi-pencil-square"></i><i class="bi bi-trash3"></i></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
            }
        </>
    )
}
