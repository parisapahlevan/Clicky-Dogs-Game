import React, {Component} from 'react';

class Card extends Component {
    render() {
        return (
            <div className="col-md-3">
                <div className="card mb-5">
                    <img 
                        className="card-img-top" 
                        src={this.props.src} 
                        alt={this.props.alt} 
                        onClick={this.props.handleClick} 
                        id={this.props.id} />
                </div>
            </div>
        )
    }
}
export default Card;