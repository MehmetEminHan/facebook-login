import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import "./style.css";
const SignIn = () => {
    return (
        <div>
            <Container fluid>
                <Row className="first-row" >
                    <Col xl="6" className="first-col">
                        <div className="first-row-first-div">
                            <img className="fb_logo _8ilh img" style={{blockSize: "120px"}}
                                 src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="Facebook"/>
                            <h2 className="_8eso" style={{marginLeft: "7%"}}>Connect with friends and the world around
                                you on Facebook.</h2>
                        </div>
                    </Col>
                    <Col xl="3" style={{marginTop: "100px"}}>
                        <div style={{
                            backgroundColor: "white",
                            borderRadius: "10px",
                            height: "400px",
                            paddingTop: "0.1px"
                        }}>

                            <Form className="mt-5 first-row-form">
                                <Form.Group className="mb-2" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Email or phone number"/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password"/>
                                </Form.Group>
                                <div className="d-grid gap-2">
                                    <Button variant="primary" type="submit">
                                        <p className="text-center fw-bold">Log In</p>
                                    </Button>
                                    <p className="text-center" style={{fontWeight: "bold", color: "blue"}}>Forgot Password?</p>
                                    <hr/>

                                </div>
                                <div className="text-center">
                                    <Button variant="success" type="submit" className="mb-md-5">
                                        <p className="fw-bold" >Create new account</p>
                                    </Button>
                                </div>
                            </Form>

                        </div>
                        <div className="text-center" style={{marginTop: "10px"}}>
                            <p><span className="fw-bold">Create a Page</span> for a celebrity, brand or business</p>

                        </div>

                    </Col>


                </Row>
            </Container>
            <div style={{marginLeft:"10px"}}>
                <Row style={{marginBottom:"1px"}}>
                   <Col xl="12">
                       <p>English (Us) &nbsp;&nbsp; Español &nbsp;&nbsp;  Français
                           (France) &nbsp; &nbsp; 中文(简体) &nbsp;&nbsp; Português (Brasil) &nbsp;&nbsp; Italiano
                           &nbsp;&nbsp;한국어&nbsp;&nbsp;Deutsch&nbsp;&nbsp; हिन्दी
                           &nbsp;&nbsp;日本語
                       </p>
                       <hr style={{width: "80%", marginLeft:"10px"}}/>
                   </Col>
                </Row>
                <Row>
                    <p >Sign Up&nbsp; &nbsp;Log In&nbsp; &nbsp;Messenger&nbsp; &nbsp;Facebook
                        Lite&nbsp; &nbsp;Watch&nbsp; &nbsp;Places&nbsp; &nbsp;Games&nbsp; &nbsp;Marketplace&nbsp; &nbsp;Facebook
                        Pay&nbsp; &nbsp;Oculus&nbsp; &nbsp;Portal&nbsp; &nbsp;Instagram&nbsp; &nbsp;Bulletin&nbsp; &nbsp;Local&nbsp; &nbsp;Fundraisers&nbsp; &nbsp;Services&nbsp; &nbsp;Voting
                        Information Center&nbsp; &nbsp;Groups&nbsp; &nbsp;About&nbsp; &nbsp;Create
                        Ad&nbsp; &nbsp;Create Page&nbsp; &nbsp;Developers&nbsp; &nbsp;Careers&nbsp; &nbsp;Privacy&nbsp; &nbsp;Cookies&nbsp; &nbsp;Ad choices&nbsp; &nbsp;Terms&nbsp; &nbsp;Help&nbsp; &nbsp;Contact Uploading &
                        Non-Users&nbsp; &nbsp;SettingsActivity log</p>
                </Row>
            </div>

        </div>
    );
};

export default SignIn;