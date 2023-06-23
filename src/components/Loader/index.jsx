import React from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { Container } from './styled'

export default function Loader() {
    return (
        <Container>
            <ThreeDots
                height="80"
                width="80"
                radius="15.5"
                color="#25233b"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </Container>
    )
}
