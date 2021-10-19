import { useState } from "react";
import { Toast, Button, Form, } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMobile } from '@fortawesome/free-solid-svg-icons';
import './Booking.css';

const Booking = () => {
    const [showB, setShowB] = useState(false);
    const toggleShowB = () => setShowB(!showB);
    return (
        <div className="text-center mt-5">
            {/* toast start */}
            <Button onClick={toggleShowB} className="mb-2 bg-success p-4">
                <h3><FontAwesomeIcon icon={faPhone} /> Call For Booking</h3>
            </Button>
            <Toast className="custom-style" onClose={toggleShowB} show={showB} animation={false}>
                <Toast.Header>
                    <h4 className="mx-auto"><strong>Dr Moina Mia Medical Center</strong></h4>
                </Toast.Header>
                <Toast.Body>
                    <h5><FontAwesomeIcon icon={faMobile} /> +0194593754</h5>
                </Toast.Body>
            </Toast>
            {/* end toast */}
            <h6 className="my-5">OR</h6>
            <Form className="bg-dark p-4 w-75 mx-auto rounded">
                <h5 className="text-white mb-3">For Appointments</h5>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="name" placeholder="Enter name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Control type="text" placeholder="Enter Address" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Make Book
                </Button>
            </Form>
        </div>
    );
};

export default Booking;
