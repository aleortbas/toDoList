import React, { Component } from "react";
import { Button, Col, Container, ListGroup, ListGroupItem, Navbar, NavbarBrand, Row, Badge } from "reactstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
    faFacebook,
    faGithub,
    faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import { faFilePen } from "@fortawesome/free-solid-svg-icons";

class ToDoList extends Component {
    render() {
        return (
            <React.Fragment>
                <Container id="test">
                    <Row id="rowtest">
                        <Navbar id="navbar-toDo">
                            <NavbarBrand>
                                <Link to={"/"} id="navbar-title">
                                    <h3>
                                        To-Do-List
                                        <FontAwesomeIcon
                                            icon={faFilePen}
                                            style={{ marginLeft: "2px" }}
                                        />
                                    </h3>
                                </Link>
                            </NavbarBrand>
                        </Navbar>
                        <Col className="border" md="3" id="rowtest">
                            <ul id="list" style={{marginTop:"20px"}}>
                            <li id="list-ul"><ListGroupItem className="justify-content-between" style={{ backgroundColor: "transparent", border: "0px", height: "" }} id="sapa">Home <Badge pill>14</Badge></ListGroupItem></li>
                            <li id="list-ul"><ListGroupItem className="justify-content-between" style={{ backgroundColor: "transparent", border: "0px", height: "" }} id="sapa">Today <Badge pill>14</Badge></ListGroupItem></li>
                            <li id="list-ul"><ListGroupItem className="justify-content-between" style={{ backgroundColor: "transparent", border: "0px", height: "" }} id="sapa">Week <Badge pill>14</Badge></ListGroupItem></li>
                            <li id="list-ul"><ListGroupItem className="justify-content-between" style={{ backgroundColor: "transparent", border: "0px", height: "" }} id="sapa">Projects <Badge pill>14</Badge></ListGroupItem></li>
                            <li id="list-ul"><ListGroupItem className="justify-content-between" style={{ backgroundColor: "transparent", border: "0px", height: "" }} id="sapa">Gym <Badge pill>14</Badge></ListGroupItem></li>
                            <li id="list-ul"><ListGroupItem className="justify-content-between" style={{ backgroundColor: "transparent", border: "0px", height: "" }} id="sapa">Study <Badge pill>14</Badge></ListGroupItem></li>
                            <li id="list-ul"><ListGroupItem className="justify-content-between" style={{ backgroundColor: "transparent", border: "0px", height: "" }} id="sapa">Work <Badge pill>14</Badge></ListGroupItem></li>
                            <li id="list-ul"><ListGroupItem className="justify-content-between" style={{ backgroundColor: "transparent", border: "0px", height: "" }} id="sapa">Porta <Badge pill>14</Badge></ListGroupItem></li>
                            <li id="list-ul"><ListGroupItem className="justify-content-between" style={{ backgroundColor: "transparent", border: "0px", height: "" }} id="sapa">Notes <Badge pill>14</Badge></ListGroupItem></li>
                            </ul>
                        </Col>
                        <Col className="bg-light" md="9" id="rowtest">
                            ddvosfv
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default ToDoList;
