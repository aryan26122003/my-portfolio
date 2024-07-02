import React, { useEffect, useState } from "react";
import './Adminsec1.scss'

export default function Adminsec1() {

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
  };
  //working type loop
//   useEffect(() => {useEffect
//     datafetch();
//   }, []); // Add an empty dependency array to fetch data once when the component mounts

  // ---------------------------------------------------


  // update api 
  const [email,setEmail] = useState("");
  const [name,setName] = useState("");
  // const [mobile,setMobile] = useState("");

  const updatadata = async()=>{
    try{
      const user = {
        email : email,
        name : name, 
        // mobile : mobile
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

  // const  mobile1= (e) =>{
  //   const value = e.target.value;
  //   setMobile(value);
  // };


  return (
    <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-2 col-md-6 col-sm-12 p-2">
                    <div className="col" id="ad-left-wrap">
                        <ul className='nav nav-tabs d-block'>
                            <li className='nav-item'><a className="nav-link active" data-toggle="tab" href="#home"><i class="fa-solid fa-house"></i><span>Home</span></a></li>
                            <li className='nav-item'><a className="nav-link" data-toggle="tab" href="#about"><i class="fa-solid fa-user"></i><span>About</span></a></li>
                            <li className='nav-item'><a className="nav-link" data-toggle="tab" href="#service"><i class="fa-solid fa-gears"></i><span>Service</span></a></li>
                            <li className='nav-item'><a className="nav-link" data-toggle="tab" href="#project"><i class="fa-solid fa-diagram-project"></i><span>Project</span></a></li>
                            <li className='nav-item'><a className="nav-link" data-toggle="tab" href="#contact"><i class="fa-solid fa-phone-volume"></i><span>Contact</span></a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-10 col-md-6 col-sm-12 p-2">
                    <div className="col" id="ad-right-wrap">
                        <div class="tab-content">
                            <div id="home" class="container tab-pane active">
                            <div className="container">
                                <div className="col">
                                  <h3 className="py-4">Home</h3>
                                </div>
                                <div className="col overflow-scroll" id="data-table">
                                  <table className="table">
                                    <thead>
                                      <tr className="bg-dark text-white">
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Mobile</th>
                                        <th>Comment</th>
                                        <th>Update</th>
                                        <th>Delete</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((topic, index) => (
                                          <tr key={index}>
                                            <td>{topic.Name}</td>
                                            <td>{topic.Email}</td>
                                            <td>{topic.Mobile}</td>
                                            <td>{topic.Comment}</td>
                                            <td><button className="btn btn-info">Update</button></td>
                                            <td><button className="btn btn-danger">Delete</button></td>
                                          </tr>
                                        ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                            <div id="about" class="container tab-pane fade">
                            <div className="container">
                                <div className="col">
                                  <h3 className="py-4">About</h3>
                                </div>
                                <div className="col overflow-scroll" id="data-table">
                                  <table className="table">
                                    <thead>
                                      <tr className="bg-dark text-white">
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Mobile</th>
                                        <th>Comment</th>
                                        <th>Update</th>
                                        <th>Delete</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((topic, index) => (
                                          <tr key={index}>
                                            <td>{topic.Name}</td>
                                            <td>{topic.Email}</td>
                                            <td>{topic.Mobile}</td>
                                            <td>{topic.Comment}</td>
                                            <td><button className="btn btn-info">Update</button></td>
                                            <td><button className="btn btn-danger">Delete</button></td>
                                          </tr>
                                        ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                            <div id="service" class="container tab-pane fade">
                            <div className="container">
                                <div className="col">
                                  <h3 className="py-4">Service</h3>
                                </div>
                                <div className="col overflow-scroll" id="data-table">
                                  <table className="table">
                                    <thead>
                                      <tr className="bg-dark text-white">
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Mobile</th>
                                        <th>Comment</th>
                                        <th>Update</th>
                                        <th>Delete</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((topic, index) => (
                                          <tr key={index}>
                                            <td>{topic.Name}</td>
                                            <td>{topic.Email}</td>
                                            <td>{topic.Mobile}</td>
                                            <td>{topic.Comment}</td>
                                            <td><button className="btn btn-info">Update</button></td>
                                            <td><button className="btn btn-danger">Delete</button></td>
                                          </tr>
                                        ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                            <div id="project" class="container tab-pane fade">
                            <div className="container">
                                <div className="col">
                                  <h3 className="py-4">Project</h3>
                                </div>
                                <div className="col overflow-scroll" id="data-table">
                                  <table className="table">
                                    <thead>
                                      <tr className="bg-dark text-white">
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Mobile</th>
                                        <th>Comment</th>
                                        <th>Update</th>
                                        <th>Delete</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((topic, index) => (
                                          <tr key={index}>
                                            <td>{topic.Name}</td>
                                            <td>{topic.Email}</td>
                                            <td>{topic.Mobile}</td>
                                            <td>{topic.Comment}</td>
                                            <td><button className="btn btn-info">Update</button></td>
                                            <td><button className="btn btn-danger">Delete</button></td>
                                          </tr>
                                        ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                            <div id="contact" class="container tab-pane fade">
                              <div className="container">
                                <div className="col">
                                  <h3 className="py-4">Contact</h3>
                                </div>
                                <div className="col overflow-scroll" id="data-table">
                                  <table className="table">
                                    <thead>
                                      <tr className="bg-dark text-white">
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Mobile</th>
                                        <th>Comment</th>
                                        <th>Update</th>
                                        <th>Delete</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((topic, index) => (
                                          <tr key={index}>
                                            <td>{topic.Name}</td>
                                            <td>{topic.Email}</td>
                                            <td>{topic.Mobile}</td>
                                            <td>{topic.Comment}</td>
                                            <td><button  type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Update</button></td>
                                            <td><button className="btn btn-danger">Delete</button></td>
                                          </tr>
                                        ))}
                                    </tbody>
                                  </table>

                                  <div class="modal fade" id="myModal">
                                    <div class="modal-dialog">
                                      <div class="modal-content">
                                      
                                        <div class="modal-header">
                                          <h4 class="modal-title">Update Your Data</h4>
                                          <button type="button" class="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        
                                        <div class="modal-body">
                                          <form action="">
                                          <div class="form-group">
                                            <label for="usr">Email:</label>
                                            <input type="text" class="form-control" id="usr" name="email" onChange={email1} value={email}/>
                                          </div>
                                          <div class="form-group">
                                            <label for="pwd">Name:</label>
                                            <input type="test" class="form-control" id="pwd" name="name" onChange={name1} value={name}/>
                                          </div>
                                            {/* <input type="text" placeholder="data update name" className="m-3" name="mobile" onChange={mobile1} value={mobile}/> */}
                                            <button className="btn btn-primary m-" onClick={updatadata} >Submit</button>
                                            <button type="button" className="btn btn-danger mx-3" data-dismiss="modal">Close</button>
                                          </form>
                                        </div>
                                        
                                      </div>
                                    </div>
                                  </div>

                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
