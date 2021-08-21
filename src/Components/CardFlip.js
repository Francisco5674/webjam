import ReactCardFlip from 'react-card-flip';
import React from 'react';

class CardFlip extends React.Component {
    constructor(props) {
      super(props);
        this.state = {
        isFlipped: false
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
  
    render() {
      return (
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
          <div className = 'box'>
            <h1 className= 'title is-4'> {this.props.nombre} </h1>
            <br/>
            <a className= '' onClick={this.handleClick}>
              <img src={this.props.picture} style={{borderRadius: "200%"}} ></img>
            </a>
          </div>
  
          <div className = 'box'>
          {this.props.inst}
          <br/>
          ingrdientes: {this.props.ing_I}, {this.props.ing_II}, {this.props.ing_III}, {this.props.ing_IV}
          <br/>
            <button className= 'button is-dark is-large is-fullwidth' onClick={this.handleClick}> Back </button>
          </div>
        </ReactCardFlip>
      )
    }
  }

  export default CardFlip;