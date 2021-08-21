import { render } from '@testing-library/react';
import { search } from 'language-tags';
import React from 'react';



class Search extends React.Component {
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

        var url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + this.state.SearchTerms;

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

                if (this.state.SearchTerms == ''){
                    this.setState({
                        SeacrhReturnValues: [],
                        loading: false
                    });
                } else
                    if (response.drinks === null) {
                        this.setState({
                            SeacrhReturnValues: [],
                            loading: false
                        });
                    } else
                    this.setState({
                        SeacrhReturnValues: response.drinks,
                        loading: false
                    });
            }
        )
    }

    render() {
        if (this.state.SeacrhReturnValues.length == 0){
            return(
                <div className= 'container'>
                <div className = 'columns box'>
                
                <div className = 'column'>
                    <img src='https://i.pinimg.com/originals/43/e0/67/43e0675444e32c516c6c3cbf74e8430d.gif' alt="Page Logo" width="800" height="800" style={{borderRadius: "5%"}}/>
                </div>
  
                <div align='center' className='column' >
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h1 className='title is-2'> Search in our selection </h1>
                    <form action = "">
                        <input className= "input" type="text" value={this.state.SearchTerms} onChange={this.changeSeacrhTerms} placeholder= 'Cocktails'/>
                        <br/>
                        <br/>
                        <button className= 'button is-dark' type="submit" onClick= {this.useSearchEngine}> Start! </button>
                    </form>
                </div>
                </div>
                </div>
            )

        } else
        return (
            <div className= 'container box has-background-black'>
            
            <div className = 'columns box'>
                
            <div className = 'column'>
                <img src='https://i.pinimg.com/originals/43/e0/67/43e0675444e32c516c6c3cbf74e8430d.gif' alt="Page Logo" width="800" height="800" style={{borderRadius: "5%"}}/>
            </div>

            <div align='center' className='column' >
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h1 className='title is-2'> Search in our selection </h1>
                <form action = "">
                    <input className= "input" type="text" value={this.state.SearchTerms} onChange={this.changeSeacrhTerms} placeholder= 'Cocktails'/>
                    <br/>
                    <br/>
                    <button className= 'button is-dark' type="submit" onClick= {this.useSearchEngine}> Start! </button>
                </form>
            </div>
            </div>

            <div className=''>
                <div className= 'columns is-multiline'>
                    {(this.state.SeacrhReturnValues).map((drink) => {
                        return(
                            <div align= 'center' className='column is-one-quarter'>
                                <div className= 'box'>
                                <div className='title is-5'> {drink.strDrink} </div> 

                                <div class="imagenes">
                                <img  src= {drink.strDrinkThumb} width="200" height="200" style={{borderRadius: "200%"}} ></img>
                                </div>
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

export default Search;