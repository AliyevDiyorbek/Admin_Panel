import styled from "styled-components";

export const Container = styled.div`
    width: 250px;
    // height: 100%;
    background-color: #25233b;
    color: #82828c;
    position: fixed;
    bottom: 0;
    top: 0;
    left: 0;
`

Container.Title = styled.h3`
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    padding: 22.9px 0;
    color: #d1d0d9;
    border-bottom: 2px solid #828282;
`

export const Menu = styled.ul`
    margin-top: 40px;
`

Menu.Item = styled.li`
    a {
        margin-top: 20px;
        padding: 15px;
        border-radius: 30px 0 0 30px;
        display: block;
    }

    a.active{
        background: #eaecf8;
    }
`