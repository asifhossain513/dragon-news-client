import moment from 'moment/moment';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import {
  FaEye,
  FaRegBookmark,
  FaShareAlt,
  FaStar,
  FaRegStar,
} from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
  const { image_url, author, rating, _id, title, details, total_view } = news;
  return (
    <Card className="mb-4">
      <Card.Header className="d-flex align-items-center">
        <Image src={author?.img} style={{ height: '50px' }} roundedCircle />
        <div className="ms-3 flex-grow-1">
          <p>{author?.name}</p>
          <p>
            <small>{moment(author?.published_date).format('YYYY-MM-D')}</small>
          </p>
        </div>
        <div>
          <FaRegBookmark></FaRegBookmark>
          <FaShareAlt className="ms-2"></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title> {title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {' '}
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 263)}...
              <Link to={`/news/${_id}`}>Read More</Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex align-items-center">
        <div className="flex-grow-1">
          <Rating
            placeholderRating={rating.number}
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar className="text-warning"></FaStar>}
            fullSymbol={<FaStar></FaStar>}
          ></Rating>
          <span className="ps-2">{rating.number}</span>
        </div>

        <div>
          <p>
            <FaEye></FaEye> {total_view}
          </p>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
