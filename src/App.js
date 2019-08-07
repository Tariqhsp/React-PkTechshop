import React from 'react';
import './App.css';
//import './css/font-awesome.min.css';
//import $ from "jquery";
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/inc/header';
import Routes from './components/inc/routes';
import { Container, Row, Col } from 'react-bootstrap';
import { Provider } from "react-redux";
import store from './store/Store';
import TopBar from './components/inc/topBar';
import Footer from './components/inc/Footer';
function App() {
  return (
    <Provider store={store} >
    	<div className="App">
	      <header className="header_area">
	      	<TopBar />
	      	<div className="main_menu">
		        <Container>
		          <Row>
		            <Col md="12">
		              <BrowserRouter>
		                <Navbar />
		                <Routes />
		              </BrowserRouter>
		            </Col>
		          </Row>
		        </Container>
		     </div>
	      </header>
	      <Footer />
      </div>
    </Provider>

  );
}

export default App;
