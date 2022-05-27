import React from "react";
import { Card } from 'react-bootstrap';
import Edu from './img/Edu.jpg';

function education(){
  return(
    <div className="card" style={{width:'40rem'}} >
      <Card >
        <div className="img-fluid">
          <Card.Img variant="top" src={Edu} style={{width:'20rem'}}  />
        </div>
        <Card.Body >
          <Card.Title>Mis estudios</Card.Title>
          <Card.Text>
            Cuento con estudios de basica primaria y secundaria, aun sigo estudiando, ya que me encuentro en la carrera de ingenieria en sistemas y telecomunicaciones y estoy desarrollando el 5 semestre de mi carrera.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    
    
  )
}

export default education;