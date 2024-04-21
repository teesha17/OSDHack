// import React, { useState } from 'react'
// import { Link,json,useNavigate } from 'react-router-dom'
// export default function SignUpContractor() 
// {
//   const navigate = useNavigate();
//   const [credentials , setCredentials] = useState({
//     name:"",
//     email:"",
//     password:"",
//     location:""
//   })

//   const handleSubmit = async(e)=>{
//     e.preventDefault();
//     console.log(JSON.stringify({name: credentials.name,
//       email: credentials.email,
//       password: credentials.password,
//       location: credentials.location,}))
//     const response =await fetch("http://localhost:3000/api/createcontractor",{
//     method:'POST',
//     headers:{
//       'Content-Type':'application/json'
//     },
//     body: JSON.stringify({
//       name: credentials.name,
//       email: credentials.email,
//       password: credentials.password,
//       location: credentials.location,
//     })
//   });
//   const jSon =  await response.json();
//   console.log(jSon);

//   if(!jSon.success){
//     alert("enter valid credentials");
//   }
//   if(jSon.success){
//     localStorage.setItem("userEmail",credentials.email);
//     localStorage.setItem("authToken",json.authToken);
//     console.log(localStorage.getItem("authToken"))
//     navigate("/");
//   }
//   }

//   const handleChange=(event)=>{
//     setCredentials({...credentials,[event.target.name] : event.target.value})
//   };

//   return (
//     <>
//     <div className='container' style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100vh"}}>
//       <h1>Welcome !!</h1>
//       <Link to="/"><img src="" className='logo-ssc'></img></Link> 
//       <form onSubmit={handleSubmit}>
//       <div className="form-group">
//     <label htmlFor="name">Name</label>
//     <input type="text" className="form-control" id="exampleInputName" placeholder="Enter name" name="name" value={credentials.name} onChange={handleChange}/>
//   </div>
//   <div className="form-group">
//     <label htmlFor="exampleInputEmail1">Email address</label>
//     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={credentials.email} onChange={handleChange}/>
//     <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
//   </div>
//   <div className="form-group">
//     <label htmlFor="exampleInputPassword1">Password</label>
//     <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" value={credentials.password} onChange={handleChange}/>
//   </div>
//   <div className="form-group">
//     <label htmlFor="address">Address</label>
//     <input type="text" className="form-control"  placeholder="Address" name="location" value={credentials.location} onChange={handleChange}/>
//   </div>
  
//   <button type="submit" className="m-3 btn btn-success">Submit</button>
//   <Link to="/logincontractor" className='m-3 btn btn-danger'>Already a user?</Link>
// </form>
// </div>
//     </>
//   )
// }






import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../components/Home/./11332329_1186.jpg'

export default function SignUpContractor() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
    avatar: null // Added avatar field for file upload
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', credentials.name);
    formData.append('email', credentials.email);
    formData.append('password', credentials.password);
    formData.append('location', credentials.location);
    formData.append('experience', credentials.experience);
    formData.append('avatar', credentials.avatar); // Append the avatar file

    const response = await fetch("https://osdhack.onrender.com/api/createcontractor", {
      method: 'POST',
      body: formData
    });

    const json = await response.json();

    if (!json.success) {
      alert("Enter valid credentials");
    } else {
      localStorage.setItem("userEmail", credentials.email);
      localStorage.setItem("authToken", json.authToken);
      navigate("/");
    }
  };

  const handleChange = (event) => {
    if (event.target.name === 'avatar') {
      setCredentials({ ...credentials, avatar: event.target.files[0] });
    } else {
      setCredentials({ ...credentials, [event.target.name]: event.target.value });
    }
  };

  return (
    <>
      <div className='container' style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh",width:"100vw" }}>
        <h1>Welcome !!</h1>
        <Link to="/"><img src=" " className='logo-ssc' alt="Logo"></img></Link>
        <form onSubmit={handleSubmit} encType="multipart/form-data" style={{width:"80%"}}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="exampleInputName" placeholder="Enter name" name="name" value={credentials.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={credentials.email} onChange={handleChange} />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" value={credentials.password} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input type="text" className="form-control" placeholder="Address" name="location" value={credentials.location} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="address">experience</label>
            <input type="text" className="form-control" placeholder="experience" name="experience" value={credentials.experience} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="avatar">Projects</label><br/>
            <input type="file" className="form-control-file" id="avatar" name="avatar" onChange={handleChange} />
          </div>
          <button type="submit" className="m-3 btn btn-success">Submit</button>
          <Link to="/logincontractor" className='m-3 btn btn-danger'>Already a user?</Link>
        </form>
      </div>
    </>
  );
}


