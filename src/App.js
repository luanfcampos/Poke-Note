import React from 'react';

//App Components
import NotesApp from './components/Notes';
import Main from './components/ToDo';
import CalenderApp from './components/Calender';
import FavoriteLinks from './components/Favorites';
import Header from './layout/Header';
import Clip from './layout/Clips';

//Router Components para navegação DOM
import { BrouserRouter, Route } from 'react-router-dom'

//React-Bootstrap Components
import { Container, Col, Row } from 'react-bootstrap'

//Component principal

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
        <header className="App-header">
              {/* vai mostrar o clip */}
              <Clip /> 
          </header>
          <header className="App-header">
              {/* Titulo da página */}
              <Header /> 
          </header>
        </Row>
        <Row>
            <Col className="col-12 col-md-6 col-lg-6"> 
              {/* vai mostrar a seção de notas */}
              <BrowserRouter>
                <Route path="/" component={NotesApp}/> 
              </BrowserRouter>
            </Col>
            <Col className="col-12 col-md-6 col-lg-6">  
              {/* vai mostrar a seção to-do */}
              <BrowserRouter>
                <Route path="/" component={Main}/> 
              </BrowserRouter>
            </Col>
        </Row>
        <Row>
          <Col className="col-12 col-md-6 col-lg-6"> 
            {/* vai mostrar a seção favoritos */}
            <BrowserRouter>
              <Route path="/" component={FavoriteLinks}/> 
            </BrowserRouter>
          </Col>
          <Col className="col-12 col-md-6 col-lg-6"> 
            {/* vai mostrar a seção do calendario */}
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