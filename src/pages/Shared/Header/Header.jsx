import moment from 'moment';
import React from 'react';
import Button from 'react-bootstrap/Button';
import logo from '../../../assets/logo.png';
import Marquee from 'react-fast-marquee';
import { Container} from "react-bootstrap";


const Header = () => {
    return (
      <Container>
        <div>
          <div className="text-center">
            <img src={logo} alt="" />
            <p className="text-secondary">
              {moment().format('dddd, MMMM DD, YYYY')}
            </p>
          </div>
          <div className="d-flex mb-2">
            <Button variant="danger">Danger</Button>
            <Marquee speed={100} className="text-danger">
              Match Highlights: Germany vs Spain — as it happened ! Match
              Highlights: Germany vs Spain as...
            </Marquee>
          </div>

        </div>
      </Container>
    );
};

export default Header;