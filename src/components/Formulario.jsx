import { Button, Form, Row, Col } from 'react-bootstrap';
import useCategorias from '../hooks/useCategorias';

export default function Formulario() {
  const { categorias } = useCategorias();
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
              {categorias.map((categoria) => (
                <option
                  key={categoria.strCategory}
                  value={categoria.strCategory}
                >
                  {categoria.strCategory}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Row className='justify-content-end'>
        <Col md={3}>
          <Button 
          className='text-uppercase w-100'
          variant="danger" 
          type="submit">
            Buscar Bebidas
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
