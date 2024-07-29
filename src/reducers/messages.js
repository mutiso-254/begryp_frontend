const initialState = {}


const messagesReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_MESSAGES':
            return action.payload;
        default:
            return state;
    }
}

export default messagesReducer;