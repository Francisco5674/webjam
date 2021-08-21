// import React, {useEffect, useState} from 'react';

// export default class Input extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       words: '',
//       text: ''
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   buscarEnAPI = () => {
//     <ConsumirApi words= {this.state.words} />;
//   }

//   render(){
//     return(
//       <body>
//         <h1>Prueba de busqueda</h1>

//         <form onSubmit={this.handleSubmit}>
//         <label htmlFor="new-todo">
//             Search a cocktail
//         </label>
//         <br/>
//         <input
//             id="new-todo"
//             onChange={this.handleChange}
//             value={this.state.text}
//         />
//         <br/>
//         <button onClick = {this.buscarEnAPI} >
//             Search
//         </button>
//         </form>

//         <ConsumirApi words= {this.state.words} />
//         {console.log('esta pasando x aqui')}
//         {console.log(this.state.words)}
//       </body>
//     )
//   }

//   handleChange(e) {
//     this.setState({ text: e.target.value });
//   }

//   handleSubmit(e) {
//       e.preventDefault();
//       if (this.state.text.length === 0) {
//         return;
//       }

//       const newItem = this.state.text

//       this.setState(state => ({
//         words: newItem,
//         text: ''
//       }));
//   }
// }

// function ConsumirApi(props) {
// const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + props.words
// const [todos, setTodos] = useState()
// const fetchApi = async () => {
//   const response = await fetch(url)
//   console.log("esta es la parte de mati");
//   console.log(response);
//   const responseJSON = await response.json()  
//   setTodos(responseJSON)

//   console.log(" q wea pasa ooeee???")
//   console.log(responseJSON)
//   console.log(todos)
//   }
//   useEffect(() => {
//     fetchApi();
//   }, [])


//   return (
//     <body>
//         <div className = "Api"> 
//         consumiendo API 2.0
//         { !todos ? 'Cargando...' : 
//         (todos.drinks).map((algo) => {
//             return (
//                 <div>
//                 <li> {algo.strDrink} </li> 
//                 <img src= {algo.strDrinkThumb} width="200" height="200"></img>
//                 </div>
//             )  
//         })
//         }
                
//         </div>
//     </body>  
//   );
// }