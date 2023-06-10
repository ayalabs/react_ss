
// import fetch from 'node-fetch';
import React from 'react';
import {  Card, Col, Row } from 'react-bootstrap';

const Header = () => {

    const paymentHandler = async (e) => {
        // console.log('e',e?.traget);
        const API_URL = 'http://localhost:5/'
        // e.preventDefault();
        const orderUrl = `${API_URL}bs/payment/create`;
        const response = await fetch(orderUrl,{method:'GET'});
        const data = await response.json();
        console.log('dd',data);
        const options = {
          key: 'rzp_test_ibZTlBBdk7lu2s',
          name: "test2 hd",
          description: "Some Description",
          order_id: data.id,
          handler: async (response) => {
            try {
                console.log(response);
                // const paymentId = response.razorpay_payment_id;
                // const url = `${API_URL}capture/${paymentId}`;
                // const captureResponse = await Axios.post(url, {})
                // console.log(captureResponse.data);
            } catch (err) {
              console.log(err);
            }
          },
          theme: {
            color: "#686CFD",
          },
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    };
    return (
      <header className="w-100 shadow mb-3  " style={{zIndex:"1"}}>
        <Card className="p-0 w-100 ">
          <Card.Body className="p-1w-100">
            <Row>
              <Col>
                <Row className="">
                    <Col className=" ">
                            <img  width={50} alt=""  className=" rounded-circle  "
                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIxMDAiIHdpZHRoPSIxMDAiPjxyZWN0IGZpbGw9InJnYigxNjAsMTg4LDIyOSkiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48L3JlY3Q+PHRleHQgeD0iNTAiIHk9IjUwIiBmb250LXNpemU9IjUwIiB0ZXh0LWNvcHk9ImZhc3QiIGZpbGw9IiNmZmZmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHRleHQtcmlnaHRzPSJhZG1pbiIgYWxpZ25tZW50LWJhc2VsaW5lPSJjZW50cmFsIj45PC90ZXh0Pjwvc3ZnPg=="
                            />
                            <ul className='' style={{position:"absolute", left:"60px",top:"18px"}}>
                                <li className=''>User：919993502762</li>
                                <li >ID：352484</li>
                            </ul>
                            
                    </Col>
                    <Col>
                        <div className="info_right img-fluid rounded-circle p-1 float-end">
                            <div className="notice">
                                <img
                                    width={20}
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACxklEQVRoQ+2ZP2gUQRTGv7dHqjSWahVBicQyB4J/IGkEW0XBzk5stNiZvSNNkibc7pstFATt7ARFLAUbA2pAMKXBoIWVWtqkkOP2ycAdRHOX3dmbu1zCPjgWbt68937zvpvdmyWM0LTWTwBc6aZ4w8x3RpWORhVYKbVMRCu744vIijFmdRQ5RwaitZZ+BddqtVOtVuu7b5ixg4jIojFmvQIZsAJeO6K1vgVgAcB899Mv7R8ieiQiG8z80ldnvIBora8DuA/gsmNh7wA88AE0FEiz2ZzpdDrLAG47Avzv/rRWq60OswmUBtFa3wCQAJgZEqI33e5kETO/KBOvFEgX4nmZhAXm3CwD4wyilFogorcFCirtUmaLdgbRWlsIuzON0taZedElgRNIv8cOl2Quvq6PM4VBlpaWTrTb7U8ATroUNITvj6mpqfra2trPIjEKg4yzG73CXbriAvKViE4XWR1fPiLyzRhzpki8QiCNRuNClmUfigT07RMEwcU4jjfy4hYCOQhZucpr4kEAPGbmu4e+IwBeMfO1owBS6OZ4GKRVgeyR40HuWgCqjlQdydsiS45X0qqkVVI6edMqaVXSytNIyfFKWpW0Skonb1p5aSmlzgNYJSJ7PZaXaUzjv0XkI4BlY4y9/mN9/49ore35lX3HMYm2ycz1XJAwDOeCIPg8iQS9mrIsO5em6dbuGvd0JIqiWRH5MskgRHQ2SZLtfUHs4JGQlgUJw/AqET0c98lingrsyaOI3EvT9HXub6TnoJSaFpE5IprOSzCOcRHZIaItY8xOv3yFTlHGUeiwOSqQQSuolHpGRMf3W2ER+WWMse/kvZn3jkRRpEXEvu0daEQUJUnC3igAeAcJw3A+CAL7ZDDQsiyrp2m6OdEg3fuQAjBoxTUzG58QNpb3jvQKbDQal7IsawGY7X63HQRBM47j974hbLy/futAQjLys7MAAAAASUVORK5CYII="
                                alt=""
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="text-center mt-2 ">
                    <Col className="top_item">
                        <div>₹ 0.00</div>
                        Balance
                        <br />
                        <button className="btn btn-primary " onClick={paymentHandler}>
                            Recharge
                        </button>
                    </Col>
                    <Col className="top_item">
                        <div>₹ 0</div>
                        Commission
                        <br />
                        <button className="btn btn-primary ">
                            See
                        </button>
                        
                    </Col>
                    <Col className="top_item">
                        <div>₹ 0</div>
                        Interest
                        <br />
                        <button className="btn btn-primary ">
                            See
                        </button>
                    </Col>
                </Row>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </header>
    );
}

export default Header;
