import { Modal, Image } from 'react-bootstrap';
import useBebidas from '../hooks/useBebidas';

export default function ModalBebida() {
  const { modal, handleModalClick } = useBebidas();

  return (
    <Modal show={modal} onHide={handleModalClick}>
      <Modal.Body>Cuerpo del modal</Modal.Body>
    </Modal>
  );
}
