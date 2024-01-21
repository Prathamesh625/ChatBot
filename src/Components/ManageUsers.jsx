import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styles/ManageUsers.css"
import SideBar from "./SideBar";
import { faEdit, faRemove, faUpload } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useId, useState } from "react";
import { requestUsers, updateUsers } from "../Api";



function ManageUsers() {
  const userDetails = {
  id: "",
  name: "",
  email:""
}
  const [edit, setEdit] = useState(-1);
  const [userId, setUserId] = useState();
  const [userName, setUserName] = useState();
    const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();

  const [tempUsers, setTempUsers] = useState(userDetails)
  

  const apicall = async() => {
    
    const getUsers = await updateUsers(tempUsers);
    console.log(getUsers)

  }

    const addNewUserApi = async() => {
      const users = {
        id: userId,
        name: userName,
        email:userEmail
    }
    const getUsers = await updateUsers(users);
    console.log(getUsers)

  }

 

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setTempUsers({
      ...tempUsers,
      [name]:value
    })
  }

  console.log(tempUsers)
  console.log(userDetails)

  const [users, setUsers] = useState([
    { id: "1", name: "prathamesh", email: "prathamesh@gmail.com" },
     {id:"2",name:"prathamesh",email:"prathamesh@gmail.com"},
    { id: "3", name: "prathamesh", email: "prathamesh@gmail.com" },
       {id:"4",name:"prathamesh",email:"prathamesh@gmail.com"}
  ])


  useEffect(() => {
    const requestUserApi = async() => {
      const response = await requestUsers();
      setUsers(response.data)
    }
    requestUserApi();
   
  },[])

  console.log(users)



    return (
      <section className="display-flex">
        <SideBar/>
        {/*   managing Users */}
        <section className="user-container-space">
        <div className="manage-users-search-box">
          <h4>Add Users</h4>
          <form className="user-form">
                <input placeholder="UserName " onChange={(e)=>setUserId(e.target.value)} value={useId}/>
                <input placeholder="UserEmail" onChange={(e)=>setUserName(e.target.value)} value={userName} />
                <input placeholder="UserPassword" onChange={(e)=>setUserEmail(e.target.value)} value={userEmail} />
                <input type="submit" onClick={addNewUserApi} />
          </form>
        </div>

        {/*   list of uplaoded documents */}
        <div className="manage-users-list">
          <h4>User Details</h4>
            <select>
              <option>5</option>
              <option>10</option>
              <option>20</option>
              <option>30</option>
        </select>
          <div className="scroll">
            <table>
              <tr>
                <th>User Unique Id</th>
                <th>UserName</th>
                <th>UserEmail</th>
                  <th>Actions</th>
                   </tr>
                  
                  {
                    users.map((user,index) => 
                      <tr>
               
                        <td>
                          {edit === index ? <input
                            value={userId}
                            name="id"
                          className="user-input-spot-change"
                          onChange={onChangeHandler} />
                          :
                            <input
                              className="user-input-spot-change"
                              name="id"
                             
                              value={user.id} />}</td>
                        <td>
                          {edit === index ?
                            <input
                              value={userName}
                              name="name"
                              className="user-input-spot-change"
                              onChange={onChangeHandler} />
                            : <input
                              className="user-input-spot-change"
                               name="name"
                            
                              value={edit===index?tempUsers.name:user.name}
                            />}</td> 
                        <td>
                          {edit === index ?
                            <input
                              value={userEmail}
                              name="email"
                              className="user-input-spot-change"
                              onChange={onChangeHandler} />
                            :
                            <input
                              className="user-input-spot-change"
                               name="email"
                             
                              value={user.email} />}</td> 
                  <td>{edit === index ? <FontAwesomeIcon icon={faUpload} onClick={apicall}/>: <div><FontAwesomeIcon icon={faEdit} style={{marginRight:"10px"}} onClick={()=>setEdit(index)}/><FontAwesomeIcon icon={faRemove} /></div>}</td>
            
              </tr>
                    )
}

               

            </table>
          </div>
        </div>
        </section>
            </section>
    );
}

export default ManageUsers;