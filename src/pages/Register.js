import React from 'react';
import Header from '../component/Header';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChain, faCommentSms, faGift, faHockeyPuck, faKey, faLongArrowAltLeft, faMessage, faMobile, faMobileAlt, faPassport, faSms } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <>       
            <Form className='container '>
                <Form.Group className="mb-4 border-none position-relative ">
                    <FontAwesomeIcon icon={faMobileAlt} style={{position:"absolute", top:"15px", left:"10px"}}/>
                    <Form.Control  type="text " className='ps-5 myform shadow' placeholder="Mobile Number" />
                </Form.Group>

                <Form.Group className="mb-4 border-none position-relative ">
                    <Row>
                        <Col sm={12} className=''>
                           <Row>
                                <Col className=''>
                                    <FontAwesomeIcon icon={faMessage} style={{position:"absolute", top:"15px", left:"10px"}}/>    
                                    <Form.Control type="text " className='ps-5 myform   shadow' placeholder="Verification Code" />  
                                </Col>
                                <Col >
                                     <Button type="button" className='btn text-dark shadow w-50 float-end rounded-0 pt-2 pb-2 border-0 'style={{background:"#f5f5f5"}}>OTP</Button>
                                </Col>
                           </Row>
                        </Col>
                    </Row>
                    
                </Form.Group>

                <Form.Group className="mb-4 position-relative">
                <FontAwesomeIcon icon={faKey} style={{position:"absolute", top:"15px", left:"10px"}}/> 
                    <Form.Control className='ps-5'  type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-4 position-relative">
                    <FontAwesomeIcon icon={faGift} style={{position:"absolute", top:"15px", left:"10px"}}/> 
                    <Form.Control className='ps-5 myform shadow'  type="text" placeholder="Ref. Code" />
                </Form.Group>
                
                <Form.Group className="mb-4" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Row className='text-center '>
                    <Col>
                        <Link to="/login" className='text-decoration-none text-white rounded-0 pt-2 pb-2 border-0 w-100' type="button" style={{background:"#009688"}}>
                            Register
                        </Link>
                    </Col>
                </Row>
            </Form>
    </>

    );
}

export default Register;
