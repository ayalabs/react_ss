import { faHome, faSearch, faTrophy, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
            <Card className=' rounded-0   '>
                <Card.Body>
                    <Row className='text-center'>
                        <Col>
                            <Nav.Item>
                                <Link to="/" className='btn btn-link text-secondary ' ><FontAwesomeIcon icon={faHome} /></Link>
                            </Nav.Item>
                        </Col>
                        <Col>
                            <Nav.Item>
                                <Link to="/search" className='btn btn-link text-secondary'><FontAwesomeIcon icon={faSearch} /></Link>
                            </Nav.Item>
                        </Col>
                        <Col>
                            <Nav.Item>
                                <Link to="/win" className='btn btn-link text-secondary'><FontAwesomeIcon icon={faTrophy} /></Link>
                            </Nav.Item>
                        </Col>
                        <Col>
                            <Nav.Item>
                                <Link to="/login" className='btn btn-link text-secondary'><FontAwesomeIcon icon={faUser} /></Link>
                            </Nav.Item>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
}

export default Navigation;
