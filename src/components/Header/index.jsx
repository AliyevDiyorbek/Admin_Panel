import React from 'react'
import { Container, Group } from './style'
import AddStudent from '../AddStudent'
import { Link } from 'react-router-dom'

export default function Header({ title }) {
    return (
        <>
            <Container>
                <Group>
                    <Container.Title>
                        {title}
                    </Container.Title>
                    <Group>
                        <Group.Input placeholder="Filter" />
                        <Group.Btn>
                            <i className="bi bi-search"></i>
                        </Group.Btn>
                    </Group>
                </Group>
                <Link to={'/addTeacher'}>
                    <Container.Btn>
                        <i className="bi bi-plus"></i> Add New Patient
                    </Container.Btn>
                </Link>
            </Container>
        </>
    )
}
