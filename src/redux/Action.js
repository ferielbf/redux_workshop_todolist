import { ADD } from "./ActionType";
import { DELETE } from "./ActionType";
export const add = (myData) =>{
    return{
        type:ADD,
        payload:myData
    }
}
export const del = (ID) =>{
    
    return{
        type:DELETE,
        payload:ID
    }
}