import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, ButtonGroup } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";


class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container" id="container-login">
                <div className="row">
                    <div className="col-6 col-md-6" style={{ backgroundColor: "red", borderTopLeftRadius:"50px", borderBottomLeftRadius:"50px" }}>
                    </div>
                    <div className="col-6 col-md-6">
                        <div id="loginForm">
                            <Form id="form">
                                <h1>Sign in</h1>
                                <Button  id="button1"><FontAwesomeIcon id="icono" icon={faFacebook}/></Button>
                                <Button  id="button1"><FontAwesomeIcon id="icono" icon={faGoogle}/></Button>
                                <Button  id="button1"><FontAwesomeIcon id="icono" icon={faGithub}/></Button>
                                <p>Or sign in using E-Mail Address</p>
                                <FormGroup id="a">
                                    <Input type="email" name="email" id="email" placeholder="Email"></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input type="password" name="password" id="password" placeholder="Password"></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label check id="footerLogin">
                                        <Input type="checkbox" id="remeberMe"/>{''} Remeber me 
                                    </Label>
                                </FormGroup>
                                <Button id="signIn">sign in</Button>
                                <p id="forgotPassword"><a href="" id="link">Forgot your password?</a></p>
                            </Form>
                        </div>
                    </div>
                </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;