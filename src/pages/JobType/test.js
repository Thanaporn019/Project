import React, { Component } from 'react';
// import '..//App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BsFillTrashFill } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";
import { AiOutlineStepBackward } from "react-icons/ai";
import { AiFillStepForward } from "react-icons/ai";
import { AiTwotoneEye } from "react-icons/ai";
import { Modal, Button } from "react-bootstrap";
import SearchField from "react-search-field";
import { IoAddOutline } from "react-icons/io5";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// import JobType from './JobType/๋JobType';

class JobType extends Component {
  state = {
    isOpen: false
  };

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });
  render() {
    // const style = {
    //   backgroundColor: 'white',
    //   front: 'inherit',
    //   border: '1x sold blue',
    //   padding: '8px',
    //   width: '1280px',
    //   height: '800px',
    // };


    return (

      <>
        <div className="App">
          <div id="boxType" className="container-box-content">
            <div className="row wrap-container">
              <Breadcrumb>
                <Breadcrumb.Item href="#">
                  <HomeOutlined />
                  <span className="breadcrum-custom">Job Type</span>
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>

            {/* <div className="wrap-content"> */}
            <div className="box-search">
              <div className="box-title-search">
                <p className="font-size-search">Search Job Type</p>

                <div className="col-12">
                  <div className="box-search-border">

                    <form>
                      <div className="row form-group">
                        <div className="col-4"><p>Job Type</p></div>
                        {/* <div className="col-6"><SearchField
                            placeholder="JobType Name "
                            // onChange={onChange}
                            searchText=""
                            classNames="test-class"
                          />
                          </div> */}
                        <div className="col-6"><input type="text" class="form-control" /></div>
                      </div>

                      <div className="row form-group">
                        <div className="col-4"><p>Code</p></div>
                        {/* <div className="col-6"><SearchField
                            placeholder="JobType Name "
                            // onChange={onChange}
                            searchText=""
                            classNames="test-class"
                          />
                          </div> */}
                        <div className="col-6"><input type="text" class="form-control" /></div>
                      </div>



                      <div className="row form-group">
                        <div className="col-3"></div>
                        <div className="col-9">
                          <button type="button" class="btn btn-secondary" style={{ marginRight: "10px" }}>RESET</button>
                          <button type="button" class="btn btn-primary" style={{ marginRight: "60px" }}>SEARCH</button>
                        </div>


                      </div>
                    </form>


                  </div>
                </div>
              </div>

            </div>

            <div className="col-12 box-search">
              <div className="row table-ui">
                <div className="col-12 text-rigth">
                  <div>
                    {/* <Button variant="primary" onClick={this.openModal}>+ Create Job Type
                     </Button> */}
                  </div>

                  {/* <button type="button" class="btn btn-primary" > + Create Job Type</button> */}

                  <div className="wrap-content">
                    <div className="box-search">
                      <div style={{ textAlign: 'end', padding: 15 }}>
                        <Link to="/JobType/create">
                          <Button variant="primary" onClick={this.openModal}><IoAddOutline style={{ width: '16px' }} /> Create JobType</Button>
                        </Link>
                      </div>

                      <table class="table text-center">
                        <table class="table ">
                          <thead class="thead-light">

                            <tr>
                              <th scope="col">No</th>
                              <th scope="col">Job Type</th>
                              <th scope="col">Code</th>
                              <th scope="col">Edit</th>
                              <th scope="col">Delete</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Coding</td>
                              <td>ECT</td>
                              <td><FaClipboardList /></td>
                              <td onClick={this.openModal}><BsFillTrashFill /></td>


                              <Modal show={this.state.isOpen} onHide={this.closeModal}>
                                <Modal.Header closeButton style={{ color: "#bb1717" }}>
                                  <Modal.Title style={{ padding: "1rem 11rem" }}>Confirm</Modal.Title>
                                </Modal.Header>
                                <Modal.Body style={{ textAlign: "center" }}>Are you sure you want to delete this?</Modal.Body>

                                <Modal.Footer style={{ borderTop: "0px" }} style={{ justifyContent: "center" }}>
                                  <Button variant="btn btn-secondary" onClick={this.closeModal}>
                                    ON</Button>

                                  <Button variant="danger" onClick={this.openModal}>
                                    YES</Button>

                                </Modal.Footer>

                              </Modal>
                            </tr>

                            <tr>
                              <th scope="row">2</th>
                              <td>Coding</td>
                              <td>ECT</td>
                              <td><FaClipboardList /></td>
                              <td onClick={this.openModal}><BsFillTrashFill /></td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Coding</td>
                              <td>ECT</td>
                              <td><FaClipboardList /></td>
                              <td onClick={this.openModal}><BsFillTrashFill /></td>
                            </tr>
                          </tbody>
                        </table>

                      </table>
                    </div></div>

                </div>
              </div>

            </div> </div>


          {/* </div> */}
        </div><br />

        <Navbar bg="btn btn-light" expand="lg" style={{ height: "40px" }} >
          <Navbar.Brand href="#Result : 1-10 of 10" style={{ marginLeft: "400px" }}>Resulft : 1-10 of 10</Navbar.Brand>

          <Nav className="mr-auto">
            <Nav.Link href="#AiOutlineStepBackward" style={{ marginLeft: "200px" }}> <AiOutlineStepBackward /></Nav.Link>
            <Nav.Link href="#1" style={{ marginLeft: "20px" }}>  1  </Nav.Link>
            <Nav.Link href="#2" style={{ marginLeft: "10px" }}>  2  </Nav.Link>
            <Nav.Link href="#3" style={{ marginLeft: "10px" }}>  3  </Nav.Link>
            <Nav.Link href="#AiFillStepForward" style={{ marginLeft: "30px" }}><AiFillStepForward /> </Nav.Link>

          </Nav>



          <Nav.Link href="#Row per page :" style={{ marginLeft: "300px" }}>Row per page :</Nav.Link>





          <NavDropdown title="10" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">10</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">20</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">50</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">100</NavDropdown.Item>
          </NavDropdown>



          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">




          </Navbar.Collapse>
        </Navbar>


      </>
    );

  }
}

export default JobType;
