import { ADD } from "./ActionType";
import { DELETE } from "./ActionType";

const init = {
    toDoList:[]
}

const myReducer = (state = init , action) =>{
    switch (action.type) {
        case ADD:return{
            ...state, //nfarek letat inial, pour sortir chaque key, 
            toDoList:[...state.toDoList,action.payload]   //the input im gonna enter/ push
        }
        default: return state  //si je clique sur rien elle nous rend la valeur par defaut, la valeur initiale
        case DELETE:return{
           ...state,
             toDoList: state.toDoList.filter(toDoList => toDoList.id !== action.payload),
            
              }
        }
    }  


export default myReducer