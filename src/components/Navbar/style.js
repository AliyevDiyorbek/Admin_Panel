import styled from "styled-components";
// import img from './img.jpg'

export const Container = styled.div `
    width: calc(100% - 250px);
    height: 70px;
    background-color: #fff;
    box-shadow: rgba(50, 50, 50, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    right: 0;
    left: 250px;
`

Container.Logo = styled.div `
    width: auto;
    height: auto;
`

export const Group = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
`

Group.Select = styled.select `
    padding: 10px 40px 10px 10px;
    border: 1px solid #a9a9a9;
    border-radius: 3px 0 0 3px;
    margin-left: 30px;
`

Group.Option = styled.option `
    color: #b0b0b0;
    font-size: 16px;
`

Group.Input = styled.input `
    padding: 7.5px 0 9px 10px;
    border: 1px solid #a9a9a9;
    border-left: none;
    color: #b0b0b0;
    font-size: 16px;
    outline: none;
    width: 250px;
`

Group.Btn = styled.button `
    padding: 7px 12px;
    color: #d9d9d9;
    font-size: 18px;
    border: 1px solid #25223d;
    border-radius: 0 3px 3px 0;
    background-color: #25223d;
`

Group.Icon = styled.div `
    box-shadow: 4px 4px 2px #f8f7fb;
    border-radius: 3px;
    position: relative;
    color: ${props => props.red ? '#f59604' : '#21bc71'};
    text-align: center;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 15px;
`

Group.Number = styled.div `
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -5px;
    right: -5px;
    border-radius: 50%;
    color: white;
`

Group.Img = styled.img `
    width: 55px;
    height: 55px;
    overflow: hidden;
    border-radius: 40px;
`

Group.GroupTitle = styled.div `
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-left: 5px;
    margin-top: 25px;
`

Group.Title = styled.p `
    font-size: 15px;
    margin-top: ${(top) => top ? "-18px" : "0px"};
`