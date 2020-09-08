import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../Components/Grid";
import Jumbotron from "../Components/Jumbotron";
import { List, ListItem } from "../Components/List";
import { Input, TextArea, FormBtn } from "../Components/Form";
import API from "../utils/dbAPI";


function UsersData() {
    // Setting our component's inital state
    const [users, setUsers] = useState([]);
    const [spots, setSpots] = useState([]);
    const [formObject, setFormObject] = useState({});

    // Load all users and store them with setUsers
    useEffect(() => {
        loadUsers()
    }, []);

    // Loads all users and sets them to Users
    function loadUsers() {
        API.getUsers()
            .then(res => {
                console.log(res.data)
                setUsers(res.data)
                }
            )
            .catch(err => console.log(err));
    }


return (
    <Container>
        <Row>
            <Col size="md-6 sm-12">
                <Jumbotron>
                <h1>Books On My List</h1>
                </Jumbotron>
                {users.length ? (
                <List>
                    {users.map(user => (
                    <ListItem key={user._id}>
                        <Link to={"/users/" + user._id}>
                        <strong>
                            {user.username} by {user.motivationalLine}
                        </strong>
                        </Link>
                        {/* <DeleteBtn onClick={() => deleteBook(book._id)} /> */}
                    </ListItem>
                    ))}
                </List>
                ) : (
                <h3>No Results to Display</h3>
                )}
            </Col>
        </Row>
      </Container>
    )
}


export default UsersData