import React, { useState, useEffect } from "react";
// import DeleteBtn from "../Components/DeleteBtn";
import Jumbotron from "../Components/Jumbotron";
import API from "../utils/dbAPI";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Col, Row, Container } from "../Components/Grid";
import { List, ListItem } from "../Components/List";
import { Input, TextArea, FormBtn } from "../Components/Form";

function TestHome() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-6">
                <Jumbotron>
                    <h1>What Books Should I Read?</h1>
                </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
};

export default TestHome;