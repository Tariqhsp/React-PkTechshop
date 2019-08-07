import React,{ Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
export default function topBar() {
    return(
      <Container>
	    <div className="top_menu">
	        <Row>
	           	<Col className="col-lg-7">
	            	<div className="float-left">
	            	    <p>Phone: +01 256 25 235</p>
	            	    <p>email: info@eiser.com</p>
	            	</div>
	           	</Col>
	           	<Col className="col-lg-5">
	            	<div className="float-right">
	            	    <ul className="right_side">
	            	        <li>
	            	          <a href="cart.html">
	            	            gift card
	            	          </a>
	            	        </li>
	            	        <li>
	            	          <a href="tracking.html">
	            	            track order
	            	          </a>
	            	        </li>
	            	        <li>
	            	          <a href="contact.html">
	            	            Contact Us
	            	          </a>
	            	        </li>
	            	    </ul>
	            	</div>
	            </Col>
	        </Row>
	    </div>
      </Container>
   )
}


