import React, { Component } from "react";
import { Button, Col, Container, Navbar, NavbarBrand, Row } from 'reactstrap'
import { Link, NavLink, useNavigate } from "react-router-dom"
import { faFacebook, faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import { faFilePen } from "@fortawesome/free-solid-svg-icons";

class ToDoList extends Component {
    render() {
        return (
            <React.Fragment>
                <Container id="test">
                    <Row>
                    <Navbar style={{ backgroundColor: "#EC9B3B"}}>
                        <NavbarBrand>
                            <Link to={"/"}>
                                To-Do-List
                                <FontAwesomeIcon icon={faFilePen} style={{ marginLeft: "2px" }} />
                            </Link>
                        </NavbarBrand>
                    </Navbar>
                        <Col className="bg-light" md="3" id="rowtest">
                            ddvosfv
                        </Col>
                        <Col className="bg-light" md="9">
                            ddvosfv
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default ToDoList