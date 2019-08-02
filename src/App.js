import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/inc/header';
import Routes from './components/inc/routes';
import { Container, Row, Col } from 'reactstrap';
import { Provider } from "react-redux";
import store from './store/Store';
function App() {
  return (
    <Provider store={store} >
      <div className="App">
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
    </Provider>

  );
}

export default App;
