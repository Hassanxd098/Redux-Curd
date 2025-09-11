import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser} from './UserReducer'
import { ArrowLeft } from 'lucide-react';



function Update() {
    const navigate = useNavigate()
    const {id} = useParams();
    const users = useSelector((state) => state.users);
    const existingUser =users.filter(f=> f.id == id);
    const {name,email}=existingUser[0];
     const [uname, setText] = useState(name);
      const [uemail, setEmail] = useState(email);
      const  dispatch =useDispatch()
      const handleSubmit = (event) => {
          event.preventDefault();
          dispatch(updateUser({
            id: id,
            name: uname,
            email:uemail

          }))
          navigate('/')
      }
  return (
    <div>
       <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
      <ArrowLeft className="relative bottom-5" onClick={()=> navigate('/')}/>
        <form onSubmit={handleSubmit}>
          <h1> Update  User</h1>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={uname} onChange={e=>setText(e.target.value)}
            
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={uemail} onChange={e=>setEmail(e.target.value)}
            
            />
          </div>
          <button type="submit" className="btn btn-info mt-3">
            Update
          </button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Update
