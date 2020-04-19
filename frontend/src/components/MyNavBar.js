import React from "react";
import { Navbar, Form, Nav, FormControl, Button } from "react-bootstrap";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";

const MyNav = (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <div
        style={{
          display: "flex",
          alignContent: "center",
          flexDirection: "column",
        }}
      >
        <img
          src={require("../images/Q.png")}
          style={{ height: 50, width: 70 }}
        />
        <Navbar.Brand
          onClick={(event) => {
            event.preventDefault();
            console.log(props);
          }}
        >
          Q-pid course
        </Navbar.Brand>
      </div>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            onClick={(event) => {
              event.preventDefault();
              props.history.push("/course");
            }}
          >
            {" "}
            Home
          </Nav.Link>
          <Nav.Link href="/home">123</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(MyNav);
