import {} from "../types";
 
 const INITiAL_STATE = {
   test: [],
 };
 
 export const myReducer = (state = INITiAL_STATE, action) => {
   switch (action.type) {
     case 'test':
       return {
         ...state,
         test: action.payload,
       };
 
     default:
       return state;
   }
 };