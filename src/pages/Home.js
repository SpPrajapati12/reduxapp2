import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsers, loadUsers } from "../redux/action";
import {useNavigate} from "react-router-dom"

const Home = () => {
    const {users} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const history = useNavigate()

  useEffect(() => {
      dispatch(loadUsers())
    }, [])
    
    const handleDelete = (id) => {
        if(window.confirm("Are You sure wanted to delete")){
            dispatch(deleteUsers(id))
        }
    }
  return (
    <div className="container">
      <div>
      <button className="btn btn-primary mb-4 mt-4" onClick={() => history("/addUser")}>Add User</button>
      </div>
      <div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Contact</th>
              <th scope="col">Address</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users && users.map((user) => (
                 <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.contact}</td>
              <td>{user.address}</td>
              <td>
                <button className="btn btn-danger mr-4" onClick={() => handleDelete(user.id)}>delete</button>
                <button className="btn btn-primary" onClick={() => history(`/editUser/${user.id}`)}>Edit</button>
                </td>
            </tr>
            ))}
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
