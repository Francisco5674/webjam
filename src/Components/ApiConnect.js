import React, {useEffect, useState} from 'react';

class ApiConnect extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
        words: '',
        text: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    componentDidMount() {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + this.state.words)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.drinks
            });
          },
          // Nota: es importante manejar errores aquí y no en 
          // un bloque catch() para que no interceptemos errores
          // de errores reales en los componentes.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.text.length === 0) {
          return;
        }

        const newItem = this.state.text

        this.setState(state => ({
          words: newItem,
          text: ''
        }));
    }

  
    render() {
      const { error, isLoaded, items, keywords } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <div>
                {this.state.words}
                <form onSubmit={this.handleSubmit}>
                <label htmlFor="new-todo">
                    Search a cocktail
                </label>
                <br/>
                <input
                    id="new-todo"
                    onChange={this.handleChange}
                    value={this.state.text}
                />
                <br/>
                <button>
                    Search
                </button>
                </form>
                <ul>
                    {items.map(item => (
                    <li key={item.idDrink}>
                        {item.strDrink}
                    </li>
                    ))}
                </ul>
            </div>
          
        );
      }
    }
    
  }

  export default ApiConnect;