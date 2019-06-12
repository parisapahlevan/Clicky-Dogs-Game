import React, {Component} from 'react';
import Card from './Card';
import Dogs from "./../dogs.json"
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
        }

        
        else {
           
            this.state.dogs.forEach(dog => {
                
                if (dog.id === id) {
                    
                    this.setState({selectedDogs: [...this.state.selectedDogs, dog]});
                    console.log(this.state.selectedDogs);

                    
                    this.updateScore();
                }
            })  
        }
        

        // SHUFFLE THE Dogs
        this.setState({ dogs: shuffle(this.state.dogs)});
        console.log("Shuffling Dogs");

    }

    // function to update the current game's score
    updateScore = () => {
        // set the new score
        this.setState({score: this.state.score + 1});
        // update the parent component's display
        this.props.updateCurrentScore(this.state.score);
        console.log("Score: " + this.state.score);
    }

    // function to end the game
    endGame = () => {
        console.log("End!");
        // push the current game score as the new top score 
        this.props.updateTopScore(this.state.score);
        // set the score back to 1 and the selected array to empty 
        this.setState({score: 1, selectedDogs: []});
        // update the current score to 0
        this.props.updateCurrentScore(0);
    }

    render() {
        return (
            <div className="container" id="card-container">
                <div className="row">
                    {Dogs.map(dog => <Card src={dog.image} key={dog.id} id={dog.id} alt={dog.name} endGame={this.endGame} handleClick={this.handleClick} score={this.state.score} />)}
                </div>
            </div>
        );
    }
}

export default CardContainer;