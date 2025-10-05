import React from "react";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import CardBody from "react-bootstrap/esm/CardBody";
import CardImg from "react-bootstrap/esm/CardImg";
import CardText from "react-bootstrap/esm/CardText";
import CardTitle from "react-bootstrap/esm/CardTitle";
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
export default function BootstrapNavigation() {
    return (
        <div id="wd-css-navigating-with-tabs">
  <h2>Tabs</h2>
  <Nav variant="tabs">
    <NavItem>
      <NavLink href="#/Labs/Lab2/Active">Active</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#/Labs/Lab2/Link1">Link 1</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#/Labs/Lab2/Link2">Link 2</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#/Labs/Lab2/Disabled" disabled>Disabled</NavLink>
    </NavItem>
  </Nav>
  <div id="wd-css-navigating-with-cards">
  <h2> Cards </h2>
  <Card style={{ width: "18rem" }}>
    <CardImg variant="top" src="images/stacked.jpg" />
    <CardBody>
      <CardTitle>Stacking Starship</CardTitle>
      <CardText>
        Stacking the most powerful rocket in history. Mars or bust!
      </CardText>
      <Button variant="primary">Boldly Go</Button>
    </CardBody>
  </Card>
</div>
</div>
    );
}