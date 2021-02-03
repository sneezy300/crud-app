import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Users from './components/Users';
import './App.css';
import { connect } from 'react-redux'
import AddUserForm from './components/AddUserForm';

class App extends Component {

  // addNewUser = (user) => {
  //   user.id = Math.random().toString()
  //   this.setState({
  //     users: [...this.state.users, user]
  //   });
  // };
  // deleteUser = (id) => {
  //   let undeletedUsers = this.state.users.filter((user) => user.id !== id)
  //   this.setState({
  //     users: undeletedUsers,
  //   })
  // }
  // editUser = (id, updatedUser) => {
  //   this.setState({
  //     users: this.state.users.map((user => user.id === id ? updatedUser : user)
  //     ),
  //   })
  // }
  render() {
    return (
      <>
        <Container fluid style={{ marginTop: "2rem" }}>
          <Row>
            <Col md="4">
              <h4>ADD STUDENTS</h4>
              <br />
              <AddUserForm />
            </Col>

            <Col>
              <h4>STUDENT DATA</h4>
              <br />
              <Users />
            </Col>

          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users
})

export default connect(mapStateToProps)(App);
