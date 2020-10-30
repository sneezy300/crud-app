import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Users from './components/Users';
import './App.css';
import AddUserForm from './components/AddUserForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: "Nan Antwi",
          email: "sneezy300@gmail.com",
          gen: 12,
          id: "vbb1"
        },
        {
          name: "Obiribea",
          email: "yaaob@gmail.com",
          gen: 11,
          id: "jjfh4"
        },
        {
          name: "granny",
          email: "grannyk@gmail.com",
          gen: 15,
          id: "ytr6"
        },
        {
          name: "maggie",
          email: "magg@gmail.com",
          gen: 12,
          id: "xfr5"
        },
        {
          name: "Agingo",
          email: "Aduahgg@gmail.com",
          gen: 15,
          id: "ni7"
        },
      ]
    }
  }
  addNewUser = (user) => {
    user.id = Math.random().toString()
    this.setState({
      users: [...this.state.users, user]
    })
  }
  deleteUser = (id) => {
    let undeletedUsers = this.state.users.filter((user) => user.id !== id)
    this.setState({
      users: undeletedUsers,
    })
  }
  editUser = (id, updatedUser) => {
    this.setState({
      users: this.state.users.map((user => user.id === id ? updatedUser : user)
      ),
    })
  }
  render() {
    return (
      <>
        <Container fluid style={{ marginTop: "2rem" }}>
          <Row>
            <Col md="4">
              <h4>ADD STUDENTS</h4>
              <br />
              <AddUserForm addUser={this.addNewUser} />
            </Col>

            <Col>
              <h4>STUDENT DATA</h4>
              <br />
              <Users usersData={this.state.users} deleteUser={this.deleteUser} editUser={this.editUser} />
            </Col>

          </Row>
        </Container>
      </>
    );
  }
}

export default App;
