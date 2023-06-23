import styled from "styled-components";

export const Container = styled.div`
    background-color: #fff;
    padding: 20px 30px 20px 40px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

Container.Title = styled.div`
    font-weight: 700;
    margin-right: 20px;
`

export const Group = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

Group.Input = styled.input`
    padding: 5px 10px;
    width: 120px;
    color: #d9d9d9;
    font-size: 18px;
    border: 1px solid #d9d9d9;
    border-radius: 3px 0 0 3px;
    outline: 1px solid #d9d9d9;
`

Group.Btn = styled.button`
    padding: 5px 10px;
    color: #d9d9d9;
    font-size: 18px;
    border: 1px solid #25223d;
    border-radius: 0 3px 3px 0;
    background-color: #25223d;
`

Container.Btn = styled.button`
    padding: 8px 40px;
    border-radius: 30px;
    background-color: #eaecf8;
    border: none;
`