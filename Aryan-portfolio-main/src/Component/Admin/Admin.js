import React, { useEffect, useState } from "react";

export default function Admin() {
  //fetch api 
  const [data, setData] = useState([]);
  
  const datafetch = async () => {
    try {
      const response = await fetch("http://localhost:5000/fetchdata");
      const firstdata = await response.json();
      setData(firstdata);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  //working type loop
  useEffect(() => {
    datafetch();
  }, []); // Add an empty dependency array to fetch data once when the component mounts




//   update api 
  const [email,setEmail] = useState("");
  const [name,setName] = useState("");
  const [mobile,setMobile] = useState("");


  

  const updatadata = async()=>{
    try{
      const user = {
        email : email,
        name : name, 
        mobile : mobile
      };
      const data = await fetch("http://localhost:5000/update",{
        method:"put",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(user),
      });
    }    catch{}
};
  
 
  const email1 = (e) =>{
    const value = e.target.value;
    setEmail(value);
  };

  const name1 = (e)=>{
    const value = e.target.value;
    setName(value);
  };

  const  mobile1= (e) =>{
    const value = e.target.value;
    setMobile(value);
  };


  return (
    <>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Comment</th>
          </tr>
        </thead>
        
        <tbody>
          {data.map((topic, index) => (
            <tr key={index}>
              <td>{topic._id}</td>
              <td>{topic.Name}</td>
              <td>{topic.Email}</td>
              <td>{topic.Mobile}</td>
              <td>{topic.Comment}</td>
            </tr>
          ))}
        </tbody>
      </table>


      {/* update  */}
      <div className="container p-5">
      <h2>Update data </h2>
      <form action="">
      <input type="text" placeholder="Unic Id" className="m-3" name="email" onChange={email1} value={email}/>
      <input type="text" placeholder="Data name" className="m-3" name="name" onChange={name1} value={name}/>
      <input type="text" placeholder="data update name" className="m-3" name="mobile" onChange={mobile1} value={mobile}/>
      <button className="btn btn-primary m-" onClick={updatadata} >Submit</button>
      </form>
      </div>
    </>
  );
}
