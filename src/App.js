import React from 'react';
import NotesApp from './components/Notes';
import Main from './components/ToDo';
import CalenderApp from './components/Calender';
import FavoriteLinks from './components/Favorites';
import Header from './layout/Header';
import Clips from './layout/Clips';
import { BrowserRouter, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Col, Row} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
        <header className="App-header">
              <Clips /> 
          </header>
          <header className="App-header">
              <Header /> 
          </header>
        </Row>
        <Row>
            <Col className="col-12 col-md-6 col-lg-6"> 
              <BrowserRouter>
                <Route path="/" component={NotesApp}/>
              </BrowserRouter>
            </Col>
            <Col className="col-12 col-md-6 col-lg-6">  
              <BrowserRouter>
                <Route path="/" component={Main}/>
              </BrowserRouter>
            </Col>
        </Row>
        <Row>
          <Col className="col-12 col-md-6 col-lg-6"> 
            <BrowserRouter>
              <Route path="/" component={FavoriteLinks}/>
            </BrowserRouter>
          </Col>
          <Col className="col-12 col-md-6 col-lg-6"> 
            <BrowserRouter>
                <CalenderApp /> 
            </BrowserRouter>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
