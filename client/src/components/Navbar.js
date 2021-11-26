import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";

import { faUser } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SignUpForm from "./SignupForm";
import "./style.css";
import logo from "../images/logo200.png";
import Auth from "../utils/auth";

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-gradient-to-r from-purple-100 to-purple-900"
      >
        <Container
          fluid
          className="bg-gradient-to-r from-purple-100 to-purple-900"
        >
          <Navbar.Brand as={Link} to="/">
            {" "}
            <img src={logo} className="w-75" alt="logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav className="ml-auto">
              {/* <Link
                className="ml-2 px-2 cursor-pointer text-xl  bg-green-800 py-1  rounded-lg text-green-100 no-underline hover:bg-green-100 hover:text-green-600"
                to="/profile"
              >
                Profile
              </Link> */}
              <Link
                className="ml-2 px-2 cursor-pointer text-xl  bg-green-800 py-1  rounded-lg text-green-100 no-underline hover:bg-green-100 hover:text-green-600"
                as={Link}
                to="/"
              >
                Progress
              </Link>
              {/* if user is logged in show saved books and logout */}
              {Auth.loggedIn() ? (
                <>
                  {Auth.loggedIn() ? (
                    <Link
                      to="/profile"
                      className="ml-2 px-2 cursor-pointer text-xl  bg-green-800 py-1  rounded-lg text-green-100 no-underline hover:bg-green-100 hover:text-green-600"
                    >
                      Profile
                    </Link>
                  ) : (
                    ""
                  )}

                  <a
                    as={Link}
                    className="ml-2 px-2 cursor-pointer text-xl  bg-green-800 py-1  rounded-lg text-green-100 no-underline hover:bg-green-100 hover:text-green-600"
                    onClick={Auth.logout}
                  >
                    <i class="fas fa-sign-out-alt text-red-200"></i> Logout
                  </a>
                </>
              ) : (
                <a
                  as={Link}
                  className="ml-2 px-2 cursor-pointer text-xl  bg-green-800 py-1  rounded-lg text-green-100 no-underline hover:bg-green-100 hover:text-green-600"
                  onClick={() => setShowModal(true)}
                >
                  Login/Sign Up
                </a>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* set modal data up */}

      <Modal
        size="md"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
      >
        <img src={logo} href="/" className="w-35 my-2 mx-auto" alt="logo" />

        <Tab.Container defaultActiveKey="login">
          <Modal.Header closeButton>
            <Modal.Title id="signup-modal">
              <Nav variant="tabs">
                <Nav.Item>
                  <Nav.Link className="btn " eventKey="login">
                    Login
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="btn" eventKey="signup">
                    Sign Up
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body className="bg-gray-100 m-3 shadow-md rounded-xl">
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <SignUpForm
                  signUpForm={false}
                  handleModalClose={() => setShowModal(false)}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <SignUpForm
                  signUpForm={true}
                  handleModalClose={() => setShowModal(false)}
                />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
      {Auth.loggedIn() ? (
        <h4 className="px-3 bg-gradient-to-r from-purple-900 to-purple-100 text-center p-2 ">
          <FontAwesomeIcon icon={faUser} className="text-danger ml-4" />{" "}
          <span className="text-white p-2">
            {Auth.getProfile().data.username}
          </span>{" "}
        </h4>
      ) : (
        ""
      )}
    </>
  );
};

export default AppNavbar;
