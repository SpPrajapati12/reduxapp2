import React, { useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import {useNavigate, useParams} from "react-router-dom"
import { getUserByID, upadteUserByID } from "../redux/action";



const EditUser = () => {
    const history = useNavigate()
    let {id} = useParams()
    const {user} = useSelector(state => state.users)
    console.log(user)
    const dispatch = useDispatch()
    const [state, setState] = useState({
        name : "",
        email : "",
        address : "",
        contact : ""
    })
    const [error,setError] = useState("")

    const {name,email,address,contact} = state

    useEffect(() => {
      dispatch(getUserByID(id))

    }, [])
    
    useEffect(() => {
      if(user) {
        setState({...user})
      }

    }, [user])
    

    const handleChange = (e) => {
        let {name,value} = e.target
        setState({...state, [name] : value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !address || !email || !contact) {
            setError("Please enter all input field ")
        } else {
            dispatch(upadteUserByID(state,id))
            history("/")
            setError("")
        }

    }

  return (
    <div className="container">
      <h2>Edit User</h2>
      {error && <h4 style={{color : "red"}}>{error}</h4>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputName">Name</label>
          <input
            type="text"
            name="name"
            value={name ? name : ""} 
            className="form-control"
            id="exampleInputName"
            aria-describedby="emailHelp"
            placeholder="Name"
            onChange={(e) =>handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            name="email"
            value={email ? email : ""} 
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputNo">Contact</label>
          <input
          value={contact ? contact : ""}
            type="number"
            name="contact"
            className="form-control"
            id="exampleInputNo"
            placeholder="contact no."
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputAddress">Address</label>
          <input
            type="text"
            name="address"
            value={address ? address : ""}
            className="form-control"
            id="exampleInputAddress"
            placeholder="Address"
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-secondary mr-4" onClick={() => history("/")}>Back</button>

        <button type="submit" className="btn btn-info">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditUser;
