import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
} from "reactstrap";

function Example(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };

  return (
    <div>
      <Navbar color="secondary" dark>
        <NavbarBrand href="/">Bloggiee</NavbarBrand>
        <Button
          color="danger"
          outline
          onClick={() => {
            localStorage.removeItem("blogAppPassKey");
            routeChange();
          }}
        >
          Logout
        </Button>
      </Navbar>
    </div>
  );
}

export default Example;
