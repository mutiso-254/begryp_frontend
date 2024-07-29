const initialState = {
    message: {},
    status: null
}


const errors = (state= initialState, action) => {
    switch(action.type){
        case "GET_ERRORS":
            return {message: action.payload.message, status: action.payload.status}
        default:
            return state;
    }

}

export default errors;