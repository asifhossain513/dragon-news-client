import React, { useContext } from 'react';
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Login = () => {    
  const { logInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log('log in location', location)
  const from = location.state?.from?.pathname || '/category/0';

  const handleLogIn = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    logInUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, {replace: true});
      })
      .catch(error => {
        console.log(error);
      });
  }
    return (
      <Container className="mx-auto w-25 mt-5">
        <Form onSubmit={handleLogIn}>
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

          <Button variant="primary" type="submit" className="w-100">
            Submit
          </Button>
          <br />
          <Form.Text className="mt-4">
            Do not have any account?{' '}
            <Link to="/register" className="text-decoration-none text-primary">
              Register
            </Link>
          </Form.Text>

          <br />
          <Form.Text className="text-success"></Form.Text>
          <Form.Text className="text-muted"></Form.Text>
        </Form>
      </Container>
    );
};

export default Login;