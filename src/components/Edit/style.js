import styled from "styled-components";

export const Container = styled.div`
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 20px;
    background-color: rgb(234, 236, 248);
    height: 75vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
Container.Title = styled.h4`
    text-align: center;
    font-size: 18px;
    color: rgb(37, 35, 59);
`

Container.Content = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

Container.Input = styled.div`
    width: 300px;
    margin: 0 auto;
    border-radius: 6px;
    margin-top: 15px;
`

Container.Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`