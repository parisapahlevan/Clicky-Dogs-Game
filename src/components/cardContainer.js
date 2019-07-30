import React, {Component} from 'react';
import Card from './card';
import Dogs from "../dogs"
import shuffle from "shuffle-array";

class CardContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            score: 1,
            dogs: Dogs,
            selectedDogs: []
        };
    }

    handleClick = (e) => {
        let id = e.target.id;
        let exists = false;
        this.state.selectedDogs.forEach(dog => {
            if (dog.id === id) {
                exists = true;
            }
        })
        if (exists) { 
            this.endGame();
        } else {  
            this.state.dogs.forEach(dog => {  
                if (dog.id === id) {
                    this.setState({selectedDogs: [...this.state.selectedDogs, dog]});
                    this.updateScore();
                }
            })  
        }
        this.setState({ dogs: shuffle(this.state.dogs)});

    }

    updateScore = () => {
        this.setState({score: this.state.score + 1});
        this.props.updateCurrentScore(this.state.score);
    }

    endGame = () => {
        this.props.updateTopScore(this.state.score);
        this.setState({score: 1, selectedDogs: []});
        this.props.updateCurrentScore(0);
    }

    render() {
        return (
            <div className="container" id="card-container">
                <div className="row">
                    {Dogs.map(dog => 
                              <Card 
                                src={dog.img} 
                                key={dog.id} 
                                id={dog.id} 
                                alt={dog.name} 
                                endGame={this.endGame} 
                                handleClick={this.handleClick} 
                                score={this.state.score} />               
                    )}
                       
                </div>
            </div>
        );
    }
}

export default CardContainer;