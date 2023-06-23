import React from "react";
import { Container, Group } from "./style";
import image from '../../assets/img/test1.png'

export default function Navbar() {
  return (
    <Container>
      <Group>
        <Container.Logo>
          <i class="bi bi-text-left"></i>
        </Container.Logo>
        <Group>
          <Group.Select>
            <Group.Option value="all">All Categories</Group.Option>
            <Group.Option value="one">Category 1</Group.Option>
            <Group.Option value="two">Category 2</Group.Option>
            <Group.Option value="three">Category 3</Group.Option>
            <Group.Option value="four">Category 4</Group.Option>
            <Group.Option value="five">Category 5</Group.Option>
          </Group.Select>
          <Group.Input placeholder="Search Anyting..." />
          <Group.Btn>
            <i className="bi bi-search"></i>
          </Group.Btn>
        </Group>
      </Group>
      <Group>
        <Group.Icon className="red">
          <i class="bi bi-bell-fill"></i>
          <Group.Number className='number'>3</Group.Number>
        </Group.Icon>
        <Group.Icon className="green">
          <i class="bi bi-list-ul"></i>
          <Group.Number className='number'>5</Group.Number>
        </Group.Icon>
        <Group.Icon className="blue">
          <i class="bi bi-chat-left-dots-fill"></i>
          <Group.Number className='number'>8</Group.Number>
        </Group.Icon>
        <Group>
          <Group.Img src={image}/>
          <Group.GroupTitle>
            <Group.Title>Dr. Ankita Seth</Group.Title>
            <Group.Title top>Admin</Group.Title>
          </Group.GroupTitle>
        </Group>
      </Group>
    </Container>
  );
}
