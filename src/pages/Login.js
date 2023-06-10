import { faKey, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>       
            <Form className='container mt-5 position-relative'>
                <Form.Group className="mb-4  position-relative ">
                    <FontAwesomeIcon className='fs-5'   c icon={faMobileAlt} style={{position:"absolute", top:"10px", left:"10px"}}/>
                    <Form.Control  type="text " className='ps-5 myform shadow border-none' placeholder="Mobile Number" />
                </Form.Group>

                <Form.Group className="mb-4 position-relative">
                <FontAwesomeIcon className='fs-5'   icon={faKey} style={{position:"absolute", top:"10px", left:"10px"}}/> 
                    <Form.Control className='ps-5 rounded-0 myform shadow'  type="password" placeholder="Password"  />
                </Form.Group>
                <Row className='text-center '>
                    <Col>
                        <Link to="/profile" className='text-decoration-none text-white w-25 rounded-0 pt-2 pb-2 border-0 shadow mb-3 mt-3' type="button" style={{background:"#009688"}}>
                           Login
                        </Link>
                    </Col>
                </Row>
                <Row className='text-center '>
                    <Col>
                        <Link to="/register" className='ps-5 pe-5 shadow rounded-0 pt-2 pb-2 mt-3 btn float-end' type="button" style={{background:"#f5f5f5"}}>
                            Register
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/" className='ps-5 pe-5 shadow rounded-0 pt-2 pb-2 mt-3 btn float-start ' type="button" style={{background:"#f5f5f5"}}>
                            Forget  
                        </Link>
                    </Col>
                </Row>
            </Form>
        </>
    );
}

export default Login;
