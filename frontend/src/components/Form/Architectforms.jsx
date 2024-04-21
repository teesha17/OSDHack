import { useEffect, useState } from 'react';
import "./form.css";

function Archform(id) {
  const [form, setForm] = useState({});
  const [users, setUsers] = useState([]);

  const handleForm = (e)=>{
     console.log(e.target.files);
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log(form);
    const response = await fetch(`http://localhost:3000/archproject/${id}`,{
      method:'POST',
      body:JSON.stringify(form),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const data = await response.json();
   console.log(data); 
}
return (
    <div className = "boody">
            
      <section class="container">
      <header>Add Project</header>
      <form onSubmit={handleSubmit} className="form">
        <div class="input-box">
          <label>Project Name</label>
          <input name = "project_name" type="text" placeholder="Enter full name" required />
        </div>
        <div className="input-box">
          <label>Project Description</label><br></br>
          <textarea name="project_desc" rows="4" cols="50" onChange={handleForm}/>
        <br></br>
       </div>
       <br></br>
        <div className="column">
            <label>Project Image</label><br></br>
            <input name = "project_image" type="file" placeholder="Enter phone number" required />
        </div>
        <button type="submit">Submit</button>
        </form>
        </section>
      </div>
    
  )

  
}

export default Archform;