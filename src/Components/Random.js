import { render } from '@testing-library/react';
import { search } from 'language-tags';
import React from 'react';



class Random extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            SeacrhReturnValues: [],
            SearchTerms: '',
            loading: false,
            buscandoRandom: false,   // esto se podria borrar/
        }
    }

    changeBuscandoRandom = (e) => {   // y toda esta funcion tambien/
        this.setState({
            buscandoRandom: true
        });
    }

    changeSeacrhTerms = (e) => {
        this.setState({
            SearchTerms : e.target.value
        });
    }

    useSearchEngine = (e) => {
        this.setState({ loading: true });

        e.preventDefault();

        this.setState({
            SeacrhReturnValues: []
        });

        const pointerToThis = this;

        console.log(this.state.SearchTerms)

        var  url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
        console.log(url)

        fetch(url)
        .then(
            function(response){
            console.log(response)
            return response.json();
        }
        )
        .then( 
            (response) => {
                console.log(response)

                this.setState({
                    SeacrhReturnValues: response.drinks,
                    loading: false
                });
            }
        )
    }

        render() {
            return (
                <div className= 'container box'>
                
                <div className = 'columns box'>

                <div align='center' className='column' >
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h1 className='title is-2'> Why not randomize? </h1>
                    <form action = "">
                        <input className= "input" type="hidden" value={this.state.SearchTerms} onChange={this.changeSeacrhTerms} placeholder= 'Cocktails'/>
                        <br/>
                        <br/>
                        <button className= 'button is-dark' type="submit" onClick= {this.useSearchEngine}> Start! </button>
                    </form>
                </div>

                <div className = 'column'>
                    <img src='https://cdn.dribbble.com/users/891563/screenshots/5487605/apero.gif' alt="Page Logo" width="800" height="800" style={{borderRadius: "5%"}}/>
                </div>

                <div className=''>
                    
                    {(this.state.SeacrhReturnValues).map((drink) => { 
                        return( 
                            <div align= 'center' className='columns'>  
                                <div className= 'box'> 
                                <div className='title is-5'> {drink.strDrink} </div> 
                                <img  src= {drink.strDrinkThumb} width="500" height="500" style={{borderRadius: "200%"}} ></img>
                                </div>
                            </div>
                        )
                    }
                    )}
                </div>

                </div>

                </div>
                
            )
    }
    
}

export default Random;