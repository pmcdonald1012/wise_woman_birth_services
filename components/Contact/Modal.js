import { Modal } from "react-bootstrap";
const ContactModal = (props) => {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <h4>Thank You!</h4>
      </Modal.Header>
      <Modal.Body>
        <p>Check your email inbox for more information</p>
      </Modal.Body>
    </Modal>
  );
};

export default ContactModal;
