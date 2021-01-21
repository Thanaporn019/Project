import React, { Component } from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";

import { NavLink } from 'react-router-dom'

class Head extends Component {
  render() {
    return (
      <>
        <div class="gx-header-horizontal gx-header-horizontal-dark gx-below-header-horizontal">
          <header class="ant-layout-header gx-header-horizontal-main">
            <div class="gx-container">
              <div class="gx-header-horizontal-main-flex">
                <div class="gx-header-search gx-d-none gx-d-lg-flex">
                  <div class="gx-search-bar gx-lt-icon-search-bar-lg">
                    <div class="gx-form-group">
                      {/* <input class="ant-input" type="search" placeholder="Search in app..." value="" />
                      <span class="gx-search-icon gx-pointer">
                        <i class="icon icon-search"></i>
                      </span> */}

                      <span style={{ color: '#fff', fontSize: '22pt' }}>header</span>

                    </div>
                  </div>
                </div>

                <ul class="gx-header-notifications gx-ml-auto">
                  <li class="gx-notify">
                    <span class="gx-pointer gx-d-block">
                      menu 1
                    </span>
                  </li>
                  <li class="gx-msg">
                    <span class="gx-pointer gx-status-pos gx-d-block">
                      menu 2
                    </span>
                  </li>
                  <li class="gx-msg">
                    <span class="gx-pointer gx-status-pos gx-d-block">
                      menu 3
                    </span>
                  </li>
                  <li class="gx-msg">
                    <span class="gx-pointer gx-status-pos gx-d-block">
                      menu 4
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </header>
        </div>
        {/* <Navbar className="Navbar-color" expand="lg" >
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
        </Navbar> */}

        {/* <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar> */}
      </>
    );
  }
}
export default Head;