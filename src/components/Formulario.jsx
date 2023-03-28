import { Button, Form, Row, Col } from 'react-bootstrap';

export default function Formulario() {
  return (
    <Form>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="nombre">Nombre de la bebida</Form.Label>
            <Form.Control
              id="nombre"
              type="text"
              placeholder="Ej. Margarita"
              name="nombre"
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="categoria">
              Selecciona una Categoría
            </Form.Label>
            <Form.Select id="categoria" name="categoria">
              <option value="">-- Selecciona categoría --</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
}
