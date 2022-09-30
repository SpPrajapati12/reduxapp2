import axios from "axios"
import { Add_USER, DELETE_USER, GET_USERS, GET_USER_BY_ID, UPDATE_USER_BY_ID } from "./actionType"



const getUsers = (users) => ({
    type : GET_USERS,
    payload : users
})

const userAdded = () => ({
    type : Add_USER,
})
const getUser = (user) => ({
    type : GET_USER_BY_ID,
    payload : user
})
const userUpdated = () => ({
    type : UPDATE_USER_BY_ID,
})

const userDeleted = () => ({
    type : DELETE_USER,
})


export const loadUsers = () => {
    return function (dispatch){
        axios.get(`${process.env.REACT_APP_API}`).then((res) => {
            dispatch(getUsers(res.data))
        }).catch(error => console.log(error))
    }
}
export const addUsers = (user) => {
    return function (dispatch){
        axios.post(`${process.env.REACT_APP_API}`,user).then(() => {
            dispatch(userAdded())
        }).catch(error => console.log(error))
    }
}
export const getUserByID = (id) => {
    return function (dispatch){
        axios.get(`${process.env.REACT_APP_API}/${id}`).then((res) => {
            dispatch(getUser(res.data))
        }).catch(error => console.log(error))
    }
}
export const upadteUserByID = (user, id) => {
    return function (dispatch){
        axios.put(`${process.env.REACT_APP_API}/${id}`,user).then(() => {
            dispatch(userUpdated())
        }).catch(error => console.log(error))
    }
}
export const deleteUsers = (id) => {
    return function (dispatch){
        axios.delete(`${process.env.REACT_APP_API}/${id}`).then(() => {
            dispatch(userDeleted())
            dispatch(loadUsers())
        }).catch(error => console.log(error))
    }
}

