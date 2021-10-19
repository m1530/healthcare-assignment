import React from 'react';
import { Form, Button } from 'react-bootstrap';

const jOB = () => {
    return (
        <div className="Container my-5 text-center">
            <h5 className="mb-3">Fill Up and Submit for applying job</h5>
            <Form className="bg-dark p-4 w-50 mx-auto rounded">

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" placeholder="Enter name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicFather">
                    <Form.Control type="text" placeholder="Enter your father name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicMother">
                    <Form.Control type="text" placeholder="Enter your mother name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicedEucational">
                    <Form.Control type="text" placeholder="Enter educational background" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Control type="text" placeholder="Enter Address" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default jOB;