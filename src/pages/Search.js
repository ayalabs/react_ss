import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Search = () => {
    return (
       <>  
            <Row className='m-0'  style={{background:"#fafafa"}}>
                <Col>
                    <input class="form-control p-3 border-0 shadow-sm rounded-0 mt-4 mb-4" type="text" placeholder="Search For Goods" aria-label="Search " />   
                    <Card className="">
                        <Card.Body className=" text-center"  style={{background:"#fafafa"}}>
                            <Row className='mb-3'>
                                <Col >
                                    <Link to="#" className='text-dark text-decoration-none'>
                                        <Card className="p-2 h-100" >
                                            <Card.Body className="pb-0 ps-0"  >
                                                <img className="w-25 " src="https://art.successtime.games/uploads/images/51iEBQzCL5L._UL1500_.jpg" alt=''/>    
                                                <Card.Text>LIZI MANDLER</Card.Text>
                                                <span className='float-start'> $ 26024.00</span>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>
                                <Col >
                                    <Link to="#" className='text-dark text-decoration-none'>
                                        <Card className="p-2 h-100" >
                                            <Card.Body className="pb-0 ps-0"  >
                                                <img className="w-25 " src="https://art.successtime.games/uploads/images/71JvL64Y3cL._UY695_.jpg" alt=''/>    
                                                <Card.Text>ELI HALILI</Card.Text>
                                                <span className='float-start'> $ 26024.00</span>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col >
                                    <Link to="#" className='text-dark text-decoration-none'>
                                        <Card className="p-2 h-100" >
                                            <Card.Body className="pb-0 ps-0"  >
                                                <img className="w-25 " src="https://art.successtime.games/uploads/images/71YWzTc2omL._UY695_.jpg" alt=''/>    
                                                <Card.Text>GUCCCI</Card.Text>
                                                <span className='float-start'> $ 26024.00</span>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>
                                <Col >
                                    <Link to="#" className='text-dark text-decoration-none'>
                                        <Card className="p-2 h-100"  >
                                            <Card.Body className="pb-0 ps-0"  >
                                                <img className="w-25 " src="https://art.successtime.games/uploads/images/4.jpg" alt=''/>    
                                                <Card.Text>LIZZIE MR</Card.Text>
                                                <span className='float-start'> $ 26024.00</span>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col >
                                    <Link to="#" className='text-dark text-decoration-none'>
                                        <Card className="p-2 h-100" >
                                            <Card.Body className="pb-0 ps-0"  >
                                                <img className="w-25 " src="https://art.successtime.games/uploads/images/5.jpg" alt=''/>    
                                                <Card.Text>HARWELL CODFREY</Card.Text>
                                                <span className='float-start'> $ 26024.00</span>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>
                                <Col >
                                    <Link to="#" className='text-dark text-decoration-none'>  
                                        <Card className="p-2 h-100" >
                                            <Card.Body className="pb-0 ps-0"  >
                                                <img className="w-25 " src="https://art.successtime.games/uploads/images/6.jpg" alt=''/>    
                                                <Card.Text>GAle Ki CHain</Card.Text>
                                                <span className='float-start'> $ 26024.00</span>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
           
       </>
       
    );
}

export default Search;
