import React,{useState} from 'react'
import { Link ,json,useNavigate} from 'react-router-dom';

export default function LoginArchitect() {
  const [credentials , setCredentials] = useState({
    email:"",
    password:"",
  })
let navigate = useNavigate();

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   console.log(JSON.stringify({
//     email: credentials.email,
//     password: credentials.password,
//   }));

//   const response = await fetch("http://localhost:3000/api/loginarchitect", {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       email: credentials.email,
//       password: credentials.password,
//     })
//   });

//   const jsonResponse = await response.json();
//   console.log(jsonResponse);

//   if (!jsonResponse.success) {
//     alert("Enter valid credentials");
//   } else {
//     localStorage.setItem("userEmail", credentials.email);
//     localStorage.setItem("authToken", jsonResponse.authToken);
//     localStorage.setItem("userId", jsonResponse.id); // Store the ID in localStorage
//     console.log(localStorage.getItem("authToken"));
//     console.log(localStorage.getItem("userId"));
//     navigate("/");
//   }
// }



const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(JSON.stringify({
    email: credentials.email,
    password: credentials.password,
  }));

  const response = await fetch("https://osdhack.onrender.com/api/loginarchitect", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: credentials.email,
      password: credentials.password,
    })
  });

  const jsonResponse = await response.json();
  console.log(jsonResponse);

  if (!jsonResponse.success) {
    alert("Enter valid credentials");
  } else {
    // Store user data in localStorage
    localStorage.setItem("userEmail", credentials.email);
    localStorage.setItem("authToken", jsonResponse.authToken);
    localStorage.setItem("userId", jsonResponse.id);
    localStorage.setItem("userName", jsonResponse.name); // Store name
    localStorage.setItem("userAvatar", jsonResponse.avatar); // Store avatar
    localStorage.setItem("userExperience", jsonResponse.experience); // Store experience
    localStorage.setItem("userLocation", jsonResponse.location); // Store location

    console.log(localStorage.getItem("authToken"));
    console.log(localStorage.getItem("userId"));
    navigate("/");
  }
}

  const handleChange=(event)=>{
    setCredentials({...credentials,[event.target.name] : event.target.value})
  };

  return (
   
    <div className='container d-flex justify-content-center align-items-center' style={{height:"100vh",width:"100vw",flexDirection:"column"}}>
      <Link to="/"><img src="/SHEFALI’S CREATIVE CORER (2).png" className='logo-ssc'></img></Link> 
      <h1>Welcome Back!!</h1>
      <form onSubmit={handleSubmit} style={{width:"70vw"}}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={credentials.email} onChange={handleChange}/>
    
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" value={credentials.password} onChange={handleChange}/>
  </div>
  <button type="submit" className="m-3 btn btn-dark">Submit</button>
  <Link to="/createarchitect" className='m-3 btn btn-danger'>Not a user?</Link>
</form>
</div>
   
  )
}


