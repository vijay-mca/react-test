import React, { Fragment, Component } from "react"
import { Navbar, Nav, NavDropdown, FormControl, Button, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';
class BeforeLogin extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Fragment>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav><Link to="/" className="nav-link">Home</Link></Nav>
                            <Nav><Link to="/About" className="nav-link">About</Link></Nav>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
};


export default BeforeLogin;
