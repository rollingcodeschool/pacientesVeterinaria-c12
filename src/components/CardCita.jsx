import { Card, Col, Button } from "react-bootstrap";

const CardCita = ({cita, borrarCita}) => {
  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>Mascota: {cita.mascota} <br/><span className="badge text-bg-primary ">Fecha: 25/06/25 - Hora: 10:00</span></Card.Title>
          <Card.Text>
            <b>Dueño:</b> {cita.duenio}
            <br/>
            <b>Sintomas:</b> los sintomas de la mascota
          </Card.Text>
          <Button variant="danger" onClick={()=> borrarCita(cita.id)}>Borrar</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardCita;
