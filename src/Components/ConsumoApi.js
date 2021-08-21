import React, {useEffect, useState} from 'react';


function ConsumirApi() {
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + 'mu'
const [todos, setTodos] = useState()
const fetchApi = async () => {
  const response = await fetch(url)
  console.log("esta es la parte de mati");
  console.log(response);
  const responseJSON = await response.json()  
  setTodos(responseJSON)

  console.log(" q wea pasa ooeee???")
  console.log(responseJSON)
  console.log(todos)
  }
  useEffect(() => {
    fetchApi();
  }, [])


  return (
    <body>
        <div className = "Api"> 
        consumiendo API 2.0
        { !todos ? 'Cargando...' : 
        (todos.drinks).map((algo) => {
            return (
                <div>
                <li> {algo.strDrink} </li> 
                <img src= {algo.strDrinkThumb} width="200" height="200"></img>
                </div>
            )  
        })
        }
                
        </div>
    </body>  
  );
}

export default ConsumirApi