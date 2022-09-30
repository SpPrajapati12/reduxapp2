import { Add_USER, DELETE_USER, GET_USERS, GET_USER_BY_ID, UPDATE_USER_BY_ID } from "./actionType";

const initState = {
    users : [],
    user : {},
    loading : true
}

const usersReducers = (state = initState,action) => {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                users : action.payload,
                loading : false
            }
        case Add_USER:
            return {
                ...state,
                loading : false
            }
            case UPDATE_USER_BY_ID:
                return {
                    ...state,
                    loading : false
                }
        case GET_USER_BY_ID:
            return {
                ...state,
                user : action.payload,
                loading : false
            }
        case DELETE_USER:
            return {
                ...state,
                loading:false
            }
        default :
        return state;
    }
}

export default usersReducers;
