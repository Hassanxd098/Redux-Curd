import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { deleteUser } from "./UserReducer";


function Home() {
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch()
  const handleDelete =(id)=>{
    dispatch(deleteUser({id:id}))

  }

  console.log(users);

  return (
    <div className="container h-[100vh] w-full flex flex-col p-3">
      <h2>Crud app with json server</h2>
      <button
        onClick={() => navigate("/create")}
        className="btn btn-success my-3 h-[50px] w-[100px]"
      >
        Create+
      </button>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td> <Link to={`/edit/${user.id}`}>
              <button className="btn btn-sm btn-primary">Edit</button></Link>
                <button  onClick={()=> handleDelete(user.id)}className="btn btn-sm btn-danger ms-2">Delete</button>
            
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
