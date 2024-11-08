import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalDialog = ({ isOpen, onClose, submit, children }) => {

    if (!isOpen) return null;

    return (
        <Modal show={isOpen} onHide={onClose}>
            <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
        </Modal.Header>

        <Modal.Body>
            {children}
        </Modal.Body>

        <Modal.Footer>
            <Button onClick={onClose} variant="secondary">Close</Button>
            <Button onClick={submit} variant="primary">Save changes</Button>
        </Modal.Footer>
        </Modal>
);
}

export default ModalDialog;
