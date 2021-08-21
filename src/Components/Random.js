import React from 'react';
import CardFlip from './CardFlip';



class Random extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            SeacrhReturnValues: [],
            SearchTerms: '',
            loading: false
        }
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
                <div className= 'container'>
                
                <div className = 'columns'>

                <div align='center' className='column' >
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h1 className='title has-text-white is-1' front-family="verdana" > <p><strong> Why not randomize?</strong></p> </h1>
                    <form action = "">
                        <input className= "input" type="hidden" value={this.state.SearchTerms} onChange={this.changeSeacrhTerms} placeholder= 'Cocktails'/>
                        <br/>
                        <br/>
                        <button className= 'button is-dark is-large' type="submit" onClick= {this.useSearchEngine}> Start! </button>
                    </form>
                </div>

                {/* <div className = 'column'>
                    <img src='https://cdn.dribbble.com/users/891563/screenshots/5487605/apero.gif' alt="Page Logo" width="800" height="800" style={{borderRadius: "5%"}}/>
                </div> */}

                <br/>
                <br/>

                <div className='column is-half'>
                    
                    {/* <div className= 'column is-one-fifth'></div>
                    <div className= 'column is-one-fifth'></div> */}

                    {(this.state.SeacrhReturnValues).map((drink) => { 
                        return( 
                            <div className= '' align= 'center'>  
                                <CardFlip nombre= {drink.strDrink} inst = {drink.strInstructions} picture = {drink.strDrinkThumb} />
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