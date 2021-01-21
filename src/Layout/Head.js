import React, { Component } from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";

import { NavLink } from 'react-router-dom'

const Work = () => <h1>Work</h1>
const Project = () => <h1>Project</h1>

class Head extends Component {
  render() {
    return (


      <Navbar  className="Navbar-color" expand="lg" >
        <Navbar.Brand href="/" className="Navbar-brand-Style">SMARTADMIN</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/work" style={{ marginLeft: "600px" }}>work</Nav.Link>

            <Nav.Link href="/projects" style={{ marginLeft: "20px" }}>project</Nav.Link>
            
            <Nav.Link href="/jobtype" style={{ marginLeft: "20px" }}>job type</Nav.Link>
          </Nav>

          <Form inline>

          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Head;