import React from 'react';
import {  Card, Col, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';
import EditorsInsight from "../EditorsInsight/EditorsInsight";

const News = () => {
    const news = useLoaderData();
    const { title, image_url, details, category_id } = news;
    return (
      <div>
        <Row>
          <Col>
            <Card>
              <Card.Img variant="top" src={image_url} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{details}</Card.Text>
                <Link
                  to={`/category/${category_id}`}
                  className="bg-primary text-white py-2 px-3 text-decoration-none"
                >
                  <FaArrowLeft></FaArrowLeft>All news in this category
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <EditorsInsight></EditorsInsight>
      </div>
    );
};

export default News;