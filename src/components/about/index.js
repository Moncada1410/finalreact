import React from "react";
import { Card } from 'react-bootstrap';
import cur from './img/cur.png';
import './about.css';

function about(){
  return(
    <div className="card" style={{width:'40rem'}} >
      <Card >
        <div className="img-fluid">
          <Card.Img variant="top" src={cur} style={{width:'20rem'}}  />
        </div>
        <Card.Body >
          <Card.Title>Quienes somos?</Card.Title>
          <Card.Text>
            Somos unas personas dedicadas a aprender dia tras dia, algo que nos idenrifican a diario es nuestro compromiso como personas antes que como trabajadores, buscamos que las personas que tengan nuestro servicio queden contenta, tanto por el buen producto que brindamos y por nuestra atencion.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    
    
  )
}

export default about;