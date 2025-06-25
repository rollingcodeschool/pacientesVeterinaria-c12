import { Form, Button } from "react-bootstrap";
const FormularioCitas = () => {
  return (
    <section>
      <Form className="border p-3 rounded-3 bg-light">
        <Form.Group className="mb-3" controlId="mascota">
          <Form.Label>Nombre de mascota</Form.Label>
          <Form.Control type="text" placeholder="Ej: Firulais" />
          <Form.Text className="text-danger">
            mostrar el error
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="duenio">
          <Form.Label>Nombre de dueño</Form.Label>
          <Form.Control type="text" placeholder="Ej: Juan Perez" />
           <Form.Text className="text-danger">
            mostrar el error
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="fecha">
          <Form.Label>Fecha</Form.Label>
          <Form.Control type="date" placeholder="12/06/2025" />
           <Form.Text className="text-danger">
            mostrar el error
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="hora">
          <Form.Label>Hora</Form.Label>
          <Form.Control type="time" placeholder="01:00 am" />
           <Form.Text className="text-danger">
            mostrar el error
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="sintomas">
          <Form.Label>Sintomas</Form.Label>
          <Form.Control as='textarea' rows={3} type="text" placeholder="Ingrese los sintomas" />
            <Form.Text className="text-danger">
            mostrar el error
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Agregar nueva cita
        </Button>
      </Form>
    </section>
  );
};

export default FormularioCitas;
