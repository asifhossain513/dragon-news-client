import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';
import QZone from "../QZone/QZone";

const RightNav = () => {
  return (
    <div>
      <div>
        <h1>Login with</h1>
        <Button variant="outline-primary" className="mb-2 w-100">
          <FaGoogle className="me-2"></FaGoogle>
          Log in with Google
        </Button>
        <Button variant="outline-primary" className=" w-100">
          <FaGithub className="me-2 "></FaGithub>
          Log in with GitHub
        </Button>
      </div>

      <div>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook className="me-2"></FaFacebook>FaceBook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter className="me-2"></FaTwitter>Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram className="me-2"></FaInstagram>Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
    </div>
  );
};

export default RightNav;
