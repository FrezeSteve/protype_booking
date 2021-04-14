import React from 'react';
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';

const Example = (props) => {
    return (
        <div className="row">
            <Form className="col-8 mx-auto my-5">
                <h2>Login</h2>
            <FormGroup>
                    <Label for="exampleAddress">Name</Label>
                    <Input type="text" name="name" id="exampleAddress" placeholder="Name" />
                </FormGroup>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                        </FormGroup>
                    </Col>
                </Row>
                <a href="/home" className="btn btn-success">Login</a>
            </Form>
        </div>

    );
}

export default Example;