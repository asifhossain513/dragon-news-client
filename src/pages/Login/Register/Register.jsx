import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../../Provider/AuthProvider";
import { useState } from "react";
const Register = () => {
  const {createUser} = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);
  const handleAccepeted = event => {
    setAccepted(event.target.checked)
  }
  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,photo, email, password);
    createUser(email, password)
    .then(result => {
        const createdUser = result.user;
        console.log(createdUser);
    })
    .catch(error => {
      console.log(error)
    })
  }
    return (
      <Container className="mx-auto w-25 mt-5">
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo url</Form.Label>
            <Form.Control
              type="text"
              name="photo"
              placeholder="Enter photo url"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              onClick={handleAccepeted}
              label={
                <>
                  Accept <Link to="/terms">term & condition</Link>
                </>
              }
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="w-100"
            disabled={!accepted}
          >
            Submit
          </Button>
          <br />
          <Form.Text className="mt-4">
            Already have an account?
            <Link to="/login" className="text-decoration-none text-primary">
              Login now
            </Link>
          </Form.Text>

          <br />
          <Form.Text className="text-success"></Form.Text>
          <Form.Text className="text-muted"></Form.Text>
        </Form>
      </Container>
    );
};

export default Register;