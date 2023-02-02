import React, { Component } from "react";
import { Link } from "react-router-dom"
import { Button, FormGroup, Label, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
                <div className="row" id="row-login">
                    <div className="col-6 col-md-6 left" id="login" style={{borderTopLeftRadius:"30px", borderBottomLeftRadius:"30px"}}>
                        <div id="login-left-side">
                        <h2>Create, <br/> Account!</h2>
                            <p>Sign up if you still don't have an account ...</p>
                            <Button id="signUp">sign up</Button>
                        </div>
                    </div>
                    <div className="col-6 col-md-6" id="login" style={{borderTopRightRadius:"30px", borderBottomRightRadius:"30px"}}>
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
                                <Link to="ToDoList"><Button id="signIn" >sign in</Button></Link>
                                <p id="forgotPassword"><a href="ForgotPassword" id="link">Forgot your password?</a></p>
                            
                    </div>
                </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;