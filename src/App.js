import React, { Component} from 'react';
import './App.css';
import Navbar from "./components/navbar";
import Header from "./components/header";
import CardContainer  from "./components/cardContainer";
import { Container, Row, Col } from 'react-bootstrap';

class App extends Component {
  state = {
    count: 0,
    topScore: 0
  }

  updateCurrentScore = (newCount) => {
    this.setState({count: newCount});
  }

  updateTopScore = (newTop) => {
    if (newTop > this.state.topScore) {
      this.setState({topScore: newTop - 1})
    }
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>1 of 2acassadf</Col>
            <Col>2 of 2asdfasdfsa</Col>
          </Row>
          <Row>
            <Col>1 of 3dddd</Col>
            <Col>2 of 3fff</Col>
            <Col>3 of 3ggggg</Col>
          </Row>
        </Container>
        <Navbar score={this.state.count} top={this.state.topScore}/>
        <Header/>
        <CardContainer updateCurrentScore={this.updateCurrentScore} updateTopScore={this.updateTopScore}/>
      </div>
    );
  }
}

export default App;