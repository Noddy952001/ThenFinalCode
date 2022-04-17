import {Counter_incr, Counter_Dec , Change_password ,Change_Email , Change_token} from "./action"

const initalState = {
    counter : 0,
    email : "",
    password : "" ,
    isAuth : false ,
    token : ""
}



export const reducer = (store = initalState , {type , payload} ) => {


    console.log(store)
    switch(type )
    {
        case  Counter_incr :
            return ({ ...store , counter:store.counter+payload})
        case  Counter_Dec  : 
            return ({
                ...store , counter : store.counter - payload
            })

        case  Change_Email :
            return({...store , email : payload  , isAuth:true})

        case Change_password :
            return({...store , password : payload})   
        case Change_token : 
            return ({...store , token : payload})
    

        default :
            return store
                
    }

    

}



