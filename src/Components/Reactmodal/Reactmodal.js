
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Reactmodal = (props) => {
    const { title, image, price, description } = props.meal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Details
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <img className='w-50' src={image} alt="" />
                    <Modal.Title>title:{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Description:{description}</Modal.Body>
                <p>Price:{price}</p>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Reactmodal;