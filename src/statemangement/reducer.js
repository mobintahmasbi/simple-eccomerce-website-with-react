/* eslint-disable default-case */
import { produce } from 'immer'
const intialstate = {
    id: null,
    Name: null,
    Familyname: null,
    Email: null,
    Password: null,
    Buy: {
        waiting: [],
        payed: [],
    }

}
const statemanagment = (state, action) => {
    console.log('in reducer' , action);
    switch (action.type) {
        case "Loggedin":
            const info = action.payload;
            console.log('in switch' , info);
            return {
                id: info.id,
                Name: info.name,
                Familyname: info.fname,
                Email: info.email,
                Password: info.password,
                Buy: info.buy
            }

        case "Loggedout":
            return{
                id: null,
                Name: null,
                Familyname: null,
                Email: null,
                Password: null,
                Buy: {
                    waiting: [],
                    payed: [],
                }
            }
        default:
            break;
    }
}
export const Loggedinact = (Id , Name , Fname , Email , Password , Buy) => {
    return (
        {
            type: 'Loggedin',
            payload : {
                id : Id ,
                name : Name ,
                fname : Fname,
                email: Email,
                password : Password,
                buy : Buy            
            }
        }
    )
}
export {intialstate}
export default statemanagment