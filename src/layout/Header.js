import React from 'react';
import {Container, Row} from 'react-bootstrap';

function Header() {
    return (
        <Container>
            <Row>
                <div className="Header">
                    <h1 className="app-title">
                        <span className='pixels'> pxn </span>
                        Poke-Notes
                        <span className='pixels'> cli </span>
                    </h1>           
                </div>
            </Row>
        </Container>
    );
  }

export default Header;