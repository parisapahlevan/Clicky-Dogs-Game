import React from 'react';
// import image from '../img/1.jpg';
// const Card = props => (
//     <div className="col-md-3">
//         <div className="card mb-5">
//             <img className="card-img-top" src={props.src} alt={props.alt} onClick={props.handleClick} id={props.id}/>
//         </div>
//     </div>
// )

const Card = props => {
    console.log(props)
    return (
        <div className="col-md-3">
            <div className="card mb-5">
                <img 
                    className="card-img-top" 
                    src={props.src} 
                    alt={props.alt} 
                    onClick={props.handleClick} 
                    id={props.id} />
            </div>
        </div>
    )
}

export default Card;
