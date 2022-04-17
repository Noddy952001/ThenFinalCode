export const Counter_incr = "Counter_incr"
export const Counter_Dec = "Counter_Dec"

export const Change_Email =  "Change_Email"
export const Change_password  = "Change_password"
export const Change_token =  "Change_token"



export const change_token = (payload) => ({
    type : Change_token ,
    payload
})

export const change_email = (payload) => ({
    type : Change_Email ,
    payload
})

export const change_password = (payload) => ({
    type : Change_password ,
    payload

})



export const conter_inc = (payload) => ({
    type : Counter_incr,
    payload
})


export const counter_dec = (payload) => ({
    type : Counter_Dec,
    payload
})
 