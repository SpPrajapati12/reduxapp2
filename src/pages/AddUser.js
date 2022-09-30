import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom"
import { addUsers } from "../redux/action";


const AddUser = () => {
    const history = useNavigate()
    const dispatch = useDispatch()
    const [state, setState] = useState({
        name : "",
        email : "",
        address : "",
        contact : ""
    })
    const [error,setError] = useState("")

    const {name,email,address,contact} = state

    const handleChange = (e) => {
        let {name,value} = e.target
        setState({...state, [name] : value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !address || !email || !contact) {
            setError("Please enter all input field ")
        } else {
            dispatch(addUsers(state))
            history("/")
            setError("")
        }

    }

  return (
    <div className="container">
      <h2>Add User</h2>
      {error && <h4 style={{color : "red"}}>{error}</h4>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputName">Name</label>
          <input
            type="text"
            name="name"
            value={name}
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
            value={email}
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
          value={contact}
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
            value={address}
            className="form-control"
            id="exampleInputAddress"
            placeholder="Address"
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-secondary mr-4" onClick={() => history("/")}>Back</button>

        <button type="submit" className="btn btn-info">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUser;
