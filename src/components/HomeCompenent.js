import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";


class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-6 col-md-6" style={{ backgroundColor: "red" }}>
                    </div>
                    <div className="col-6 col-md-6">
                        <div id="loginForm">
                            <Form id="form">
                                <h2>Sign in</h2>
                                <p>Or sign in using E-Mail Address</p>
                                <FormGroup>
                                    <Label for="email">email</Label>
                                    <Input type="email" name="email" id="email" placeholder="Email"></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password">password</Label>
                                    <Input type="password" name="password" id="password" placeholder="Password"></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label check>
                                        <Input type="checkbox"/>{''} Remeber me
                                    </Label>
                                </FormGroup>
                                <p>Forgot your password?</p>
                                <Button id="signIn">sign in</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;