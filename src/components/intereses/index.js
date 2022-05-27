import React from "react";
import { Card } from 'react-bootstrap';
import call from './img/call.png';

function interests(){
  return(
    <div className="card" style={{width:'40rem'}} >
      <Card >
        <div className="img-fluid">
          <Card.Img variant="top" src={call} style={{width:'20rem'}}  />
        </div>
        <Card.Body >
          <Card.Title>Experiencia</Card.Title>
          <Card.Text>
            Tengo muy poca Experienciaen muchas cosas, ya que no he trabajado mucho que digamos, pero tengo experiencia en call center trabajando como asesor de venta de celulares, tambien trabaje en emergia de call center como asesor de ventas de internet, telefonia, y datos moviles. 

          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    
    
  )
}

export default interests;