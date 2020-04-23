import React, { useEffect, useState } from "react";
import { Navbar, Form, Nav, FormControl, Button } from "react-bootstrap";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import axios from "axios";

const MyNav = (props) => {
  const [email, setEmail] = useState("");

  useEffect(async () => {
    let res = await axios.get("http://localhost:5000/student/profile", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setEmail(res.data.email);
  }, []);

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand
        className="font2"
        onClick={(event) => {
          event.preventDefault();
          props.history.push("/");
          console.log(props);
        }}
      >
        Qpid Course
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto font2">
          <Nav.Link
            onClick={(event) => {
              event.preventDefault();
              props.history.push("/");
            }}
          >
            {" "}
            Home
          </Nav.Link>
          <Nav.Link className="font2" href="/add">
            Add Course
          </Nav.Link>
          <Nav.Link className="font2" href="/status">
            Status
          </Nav.Link>
        </Nav>
        <text className="font2" style={{ marginRight: 10 }}>
          {email}
        </text>
        <Button variant="outline-danger">Logout</Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(MyNav);
