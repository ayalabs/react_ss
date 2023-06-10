import React from 'react';
import { Card, Carousel, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
      <>
        <Row className='m-0 position-relative '  style={{background:"#fafafa"}}>
                <Col className=''>
                    <Carousel className='border my-slider  mb-3 shadow-sm' style={{height:"300px"}}>
                        <Carousel.Item>
                            <img className=""
                            src="https://ladbazaronline.com/wp-content/uploads/2021/01/eachpromo-ladbazar-online-banner-1.png"
                            alt=""
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className=" "
                            src="https://www.jewelryexpressoxford.com/wp-content/uploads/2020/12/jewelry-slider-1.jpg"
                            alt=""
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className=" "
                            src="https://shopearthtreasures.com/wp-content/uploads/2022/03/Layer-524.jpg"
                            alt=""
                            />
                        </Carousel.Item>
                    </Carousel>
                    <Card className="m-0">
                        <Card.Body className=" text-center"  style={{background:"#fafafa"}}>
                            <Row className='mb-2'>
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
                            <Row className='mb-2'>
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
                            <Row className='mb-2'>
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

export default Home;
