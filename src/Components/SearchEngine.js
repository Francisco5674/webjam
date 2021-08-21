import { render } from '@testing-library/react';
import { search } from 'language-tags';
import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            SeacrhReturnValues: [],
            SearchTerms: ''
        }
    }

    changeSeacrhTerms = (e) => {
        this.setState({
            SearchTerms : e.target.value
        });
    }

    useSearchEngine = (e) => {
        e.preventDefault();

        this.setState({
            SeacrhReturnValues: []
        });

        const pointerToThis = this;

        console.log(this.state.SearchTerms)

        var url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + this.state.SearchTerms;

        fetch(url)
        .then(
            function(response){
            return response.json();
        }
        )
        .then( 
            (response) => {
                console.log(response)
                if (response.drinks === null) {
                    this.setState({
                        SeacrhReturnValues: []
                    });
                } else
                this.setState({
                    SeacrhReturnValues: response.drinks
                });
            }
            
        )


    }

    render() {
        return (
            <div>
                <h1> Engine test Quinto intento</h1>
                <form action = "">
                    <input type="text" value={this.state.SearchTerms || ''} onChange={this.changeSeacrhTerms} placeholder= 'Cocktails' />
                    <button type="submit" onClick= {this.useSearchEngine}> Seacrh </button>
                </form>

                {(this.state.SeacrhReturnValues).map((drink) => {
                    return(
                        <div>
                            <li> {drink.strDrink} </li> 
                            <img src= {drink.strDrinkThumb} width="200" height="200"></img>
                        </div>
                    )
                }

                )}
            </div>
            
        )
    }
    
}

export default Search;