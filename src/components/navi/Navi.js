import { Collapse } from "bootstrap";
import React, { useState } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";
import CartSummary from "../cart/CartSummary";

export default class Navi extends React.Component {
  render() {
    return (
      <div>
        <Navbar>
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="">components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">github</NavLink>
              </NavItem>
              <CartSummary />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
